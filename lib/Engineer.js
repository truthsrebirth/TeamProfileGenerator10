const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        // call the parent constructor here:
        super(name, id, email, githubUsername);

        this.githubUsername = githubUsername;
    }

    getGithub() {
        return this.githubUsername;
    }

    getRole() {
        return "Engineer";
    }
}

// here I export the file
module.exports = Engineer;