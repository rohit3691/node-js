// Modules
// Modules - Encapsulated Code( only share minimum)
// every file in node is module

// const ravi = "ravi";
// const ritesh = "ritesh"
// const sayHello = (name)=>{
//     console.log(`hello ${name}`);
// }

// check 4th and 5th js file
// import defaults
const names = require('./4-Module-1');
const sayHello = require('./5-Module-2');
const data = require('./6-Alternative-flavor');
require('./7-mind-granade');
const {ravi,ritesh} = names;
// sayHello("rohit");
// sayHello(ravi);
// sayHello(ritesh);
