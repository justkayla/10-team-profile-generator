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
    // How do I access the data from outside the while loop?
    let arrData = [];
        
    while(addEmployee) {
        let data = await employeeData();
        console.log(data)        

        if(data.employeetype === "Manager") {
            let manager = await managerData();    // Wait for response before engaging askAgain()
            // data is an object of employeeData, the result of managerData is a property
            data = {...data, ...manager}    // Spread syntax
            console.log(data)
            arrData.push(data)

        } else if(data.employeetype === "Engineer") {        
            let engineer = await engineerData();   // Wait for response before engaging askAgain()
            data = {...data, ...engineer}   // Spread syntax
            console.log(data)
            arrData.push(data)

        } else {
            let intern = await internData();     // Wait for response before engaging askAgain()
            data = {...data, ...intern}     // Spread syntax
            console.log(data)
            arrData.push(data)     
        }        
        let result = await askAgain();
        if(!result.addanother) {
            addEmployee = false
        }
    }    
    console.log(arrData); 
    // How is the location of where this function is called affecting it's functionality? Does the argument that is passed through here need to be the same as in htmldata? Should I write the whole function on this page instead?
    writeToFile(arrData);
}

init();
