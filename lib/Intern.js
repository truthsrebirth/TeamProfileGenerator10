const Employee = require('./Employee');

class intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor here:
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return Manager;
    }
}

// here I export the file
module.exports = intern;