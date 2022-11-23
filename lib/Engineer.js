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

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Engineer";
    }
}

// here I export the file
module.exports = Engineer;