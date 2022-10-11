// Promise?
function init () {
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
    
module.exports = htmldata;

function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, (err)=>
    err ? console.log("error") : console.log('HTML created!'))
}


{
    type: 'input',
    message: 'What is the office number?',
    name: 'officenum'
},            
{
    type: 'input',
    message: 'What is your GitHub?',
    name: 'github',
},