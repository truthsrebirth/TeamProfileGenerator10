const Employee = require('../lib/Employee'); // referencing the js file
const employee = new Employee('Jordan', '8282444', 'jordan23@gmail.com');

describe('Employee class', () => {
    // variables for testing?

})

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Jordan');
    expect(employee.id).toBe('8282444');
    expect(employee.email).toBe('jordan23@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Jordan');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('8282444');
}); 

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('jordan23@gmail.com');
}); 

test('test if we can get the role from the Role() method', () => {
    expect(employee.getRole()).toBe('Employee');
}); 