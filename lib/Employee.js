class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name; // returns the name
    }

    getId() {
        return this.id; // returns the id
    }

    getEmail() {
        return this.email; // returns the email
    }

    getRole() {
        return Employee;
    }
}

// here I export the file
module.exports = Employee;