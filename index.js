const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./lib/htmldata');

const engineer1 = new Engineer ('kayla', 12, 'kayla@gmail', 'justkayla')
console.log(engineer1)

const intern1 = new Intern ('kayla', 12, 'kayla@gmail', 'justkayla')
console.log(intern1)

const manager1 = new Manager ('kayla', 12, 'kayla@gmail', 'justkayla')
console.log(manager1)



