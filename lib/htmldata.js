function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, (err)=>
    err ? console.log("error") : console.log('HTML created!'))
    }
    inquirer
        .prompt([
            {
              type: 'input',
              message: 'What is the team member name?',
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
            },
            {
                type: 'input',
                message: 'What is your LinkedIn URL?',
                name: 'linkedin',
            },
            {
                type: 'input',
                message: 'What is your GitHub URL?',
                name: 'github',
            },
        ])
        .then((data) => {
            console.log(data.name)
            console.log(data.bio)
            console.log(data.github)
            writeToFile(userData(data));
        })