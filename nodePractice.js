// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1);
const lastName = getInput(2);
const fullName = firstName + ' ' + lastName;
// str[0];
const firstInitial = firstName[0].toLocaleUpperCase()
const lastInitial = lastName[0].toLocaleUpperCase()

console.log('Hello, ' + fullName)
console.log(fullName.toLocaleUpperCase() + ' is your name all caps')
console.log(firstInitial + '. ' + lastInitial + '.')
console.log(firstInitial.toLowerCase() + lastName.toLowerCase() + '.prsvr@gmail.com')