const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

// This needs to be one big function? Prototypal 
const generateHTML = ({employeetype, name, id, email, officenum, github, school}) =>
    `<!DOCTYPE html>
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
    
    <div class="card employee-card">
        <div class="header">
            <h2 class="card-title">${employeetype}: ${name}</h2>            
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${id}</li>
                <li class="list-group-item">${email}</li>
                <li class="list-group-item">${officenum}</li>
                <li class="list-group-item">${github}</li>
                <li class="list-group-item">${school}</li>
            </ul>
        </div>
    </div>
    
    <div class="container-fluid" id="footer">
        <div class="row align-items-end">
            <div class="col">
                <h3>Made with ✨ by Kayla</h3>
            </div>
        </div>
    </div>
</body>
</html>`;

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
            name: 'employeeid',
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
        {   type: 'input',
            message: 'What is the office number?',
            name: 'officenum',
        }
    ])         
}

// If engineer was selected, ask this additional question
function engineerData() {
    return inquirer
        .prompt([
        {   type: 'input',
            message: 'What is your GitHub?',
            name: 'github',
        }
    ])         
}

// If intern was selected, ask this additional question
function internData() {
    return inquirer
        .prompt([
        {   type: 'input',
            message: 'What is your school?',
            name: 'school',
        }
    ]) 
}

// Ask to add another employee (confirm Y/n = true/false)
async function askAgain() {
    return inquirer
        .prompt([
        {   type: 'confirm',
            message: 'Do you want to add another employee?',
            name: 'addanother',
        }
    ]) 
}

function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, (err) =>
    err ? console.log("error") : console.log('HTML created!'))
}

module.exports = {generateHTML, employeeData, managerData, engineerData, internData, askAgain, writeToFile};