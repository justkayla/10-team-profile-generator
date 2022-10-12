const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const {generateHTML, employeeData, managerData, engineerData, internData, askAgain, writeToFile} = require('./lib/htmldata');



// Can use switch here instead of else/if
async function init() {
    
    let addEmployee = true
    
    while(addEmployee) {
        let data = await employeeData();
        console.log(data)

        if(data.employeetype === "manager") {
            await managerData();    // Wait for response before engaging askAgain()
            data = {...data, ...x} // spread syntax
            console.log(data) // Data is an object, managerData is an object data = {...data, ...x} spread syntax
            // push data to array
        } else if(data.employeetype === "engineer") {        
            await engineerData();   // Wait for response before engaging askAgain()
            // push data to array
        } else {
            await internData();     // Wait for response before engaging askAgain()
            // push data to array
        }
        
        let result = await askAgain();

        if(!result.addanother) {
            addEmployee = false
        }
    }

    // Empty array to push stuff into to pull from for writeToFile
    writeToFile
}

init();

