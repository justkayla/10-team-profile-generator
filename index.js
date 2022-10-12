const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
// const generateHTML = require('./lib/htmldata');


// Collaborated on section w/ Tarek M, Tyler O, Alex O, and Hunter A
// async functions to controll questions based on employee type
async function employeeData() {
    return inquirer
        .prompt([
        {
            type: 'list',
            message: 'What type of employee?',
            name: 'employeetype',
            choices: [
            'manager',
            'engineer',
            'intern',
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

// Can use switch here instead of else/if
async function init() {
    
    let addEmployee = true
    
    while(addEmployee) {
        let data = await employeeData();

        if(data.employeetype === "manager") {
            await managerData();    // Wait for response before engaging askAgain()
        } else if(data.employeetype === "engineer") {        
            await engineerData();   // Wait for response before engaging askAgain()
        } else {
            await internData();     // Wait for response before engaging askAgain()
        }
        
        let result = await askAgain();

        if(!result.confirm) {
            addEmployee = false
        }
    }
}

init();

