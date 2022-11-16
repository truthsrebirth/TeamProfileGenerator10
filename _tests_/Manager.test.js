const Manager = require('../lib/Manager');
const manager = new Manager('Jordan', '8282444', 'jordan23@gmail.com', '341');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Jordan');
    expect(manager.id).toBe('8282444');
    expect(manager.email).toBe('jordan23@gmail.com');
    expect(manager.officeNumber).toBe('342');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Jordan');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('8282444');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jordan23@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('341');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});