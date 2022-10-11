// name, id, email, school

const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(name, id, email, school) {        
        super(name, id, email);
        this.school = school;
    }
}

module.exports = Intern;  // capitalize?