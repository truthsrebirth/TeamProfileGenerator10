const intern = require('../lib/Intern');
const intern = new Intern('Jordan', '8282444', 'jordan23@gmail.com', 'Sam Houston State');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Jordan');
    expect(intern.id).toBe('8282444');
    expect(intern.email).toBe('jordan23@gmail.com');
    expect(intern.school).toBe('Sam Houston State');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Jordan');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('8282444');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('jordan23@gmail.com');
});

test('test if we can get the office number from the getSchool() method', () => {
    expect(intern.school()).toBe('Sam Houston State');
});


