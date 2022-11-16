const engineer = require('../lib/Engineer'); // referencing the js file
const engineer = new engineer('Jordan', '8282444', 'jordan23@gmail.com', 'Jordan23');

test('test if we can get the constructor values for the employee object', () => {
    expect(engineer.name).toBe('Jordan');
    expect(engineer.id).toBe('8282444');
    expect(engineer.email).toBe('jordan23@gmail.com');
    expect(engineer.githubUsername).toBe('Jordan23');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Jordan');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('8282444');
}); 

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jordan23@gmail.com');
}); 

test('test if we can get the githubUsername from the getGithubUsername() method', () => {
    expect(engineer.getRole()).toBe('Jordan23');
}); 