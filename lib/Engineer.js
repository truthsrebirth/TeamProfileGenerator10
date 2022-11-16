const Employee = require('./Employee');

class engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        // call parent constructor here:
        super(name, id, email, githubUsername);

        this.githubUsername = githubUsername;
    }

    getSchool() {
        return this.githubUsername;
    }

    getRole() {
        return engineer;
    }
}

// here I export the file
module.exports = engineer;