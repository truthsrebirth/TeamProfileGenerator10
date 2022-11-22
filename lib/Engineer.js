const Employee = require('./Employee');

class engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        // call the parent constructor here:
        super(name, id, email, githubUsername);

        this.githubUsername = githubUsername;
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

    getGithub() {
        return this.githubUsername;
    }

    getRole() {
        return engineer;
    }
}

// here I export the file
module.exports = engineer;