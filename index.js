const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

let arrData = [];

// This needs to be broken down into different parts to loop over array
const generateHTML = (employees) => {
    console.log(employees);
    let employeeHTML = ""
    for (let i = 0; i < arrData.length; i++) {
        let special = ""
        if(employees[i].getRole() === "Manager") {
            special = employees[i].getOfficeNum()
        } else if (employees[i].getRole() === "Engineer"){
            special = employees[i].getGithub()       
        } else {
            special = employees[i].getSchool()
        }
        employeeHTML += `<div class="card employee-card">
            <div class="header">
                <h2 class="card-title">${employees[i].getRole()}</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${employees[i].getName()}</li>
                    <li class="list-group-item">${employees[i].getId()}</li>
                    <li class="list-group-item">${employees[i].getEmail()}</li>                    
                    <li class="list-group-item">${special}</li>                    
                </ul>
            </div>
        </div>`
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./template.css">
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">The A-Team</h1>
          <p class="lead">Welcome! We're happy you're here 🙌</p>
        </div>
      </div>
      ${employeeHTML}   

<div class="container-fluid" id="footer">
        <div class="row align-items-end">
            <div class="col">
                <h3>Made with ✨ by Kayla</h3>
            </div>
        </div>
    </div>
</body>
</html>`;
}

// Collaborated on section w/ Tarek, Tyler O, Alex, and Hunter
// async functions to controll questions based on employee type
async function employeeData() {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'What type of employee?',
                name: 'employeetype',
                choices: [
                    'Manager',
                    'Engineer',
                    'Intern',
                ]
            },
            {
                type: 'input',
                message: 'What is the employee name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the employee id?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the email address?',
                name: 'email',
            }
        ])
}
// If manager was selected, ask this additional question
function managerData() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the office number?',
                name: 'officenum',
            }
        ])
}
// If engineer was selected, ask this additional question
function engineerData() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your GitHub?',
                name: 'github',
            }
        ])
}
// If intern was selected, ask this additional question
function internData() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your school?',
                name: 'school',
            }
        ])
}
// Ask to add another employee (confirm Y/n = true/false)
async function askAgain() {
    return inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Do you want to add another employee?',
                name: 'addanother',
            }
        ])
}
// Can use switch here instead of else/if
async function init() {

    let addEmployee = true
    // How do I access the data from outside the while loop?
    // let arrData = [];    

    while (addEmployee) {
        let data = await employeeData();
        console.log(data)

        if (data.employeetype === "Manager") {
            let manager = await managerData();    // Wait for response before engaging askAgain()
            // data is an object of employeeData, the result of managerData is a property
            data = { ...data, ...manager }    // Spread syntax
            console.log(data)
            let newManager = new Manager(data.name, data.id, data.email, data.officenum)
            arrData.push(newManager)

        }else if (data.employeetype === "Engineer") {
            let engineer = await engineerData();   // Wait for response before engaging askAgain()
            data = { ...data, ...engineer }   // Spread syntax
            console.log(data)
            let newEngineer = new Engineer(data.name, data.id, data.email, data.github)
            arrData.push(newEngineer)

        }else {
            let intern = await internData();     // Wait for response before engaging askAgain()
            data = { ...data, ...intern }     // Spread syntax
            console.log(data)
            let newIntern = new Intern(data.name, data.id, data.email, data.school)
            arrData.push(newIntern)
        }
        let result = await askAgain();
        if (!result.addanother) {
            addEmployee = false
        }
    }
    console.log(arrData);
    // How is the location of where this function is called affecting it's functionality? Does the argument that is passed through here need to be the same as in htmldata? Should I write the whole function on this page instead?
    writeToFile(arrData);
}
function writeToFile(arrData) {
    fs.writeFile('./dist/index.html', generateHTML(arrData), (err) =>
        err ? console.log("error") : console.log('HTML created!'))
}
init();