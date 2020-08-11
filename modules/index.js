const {printName, lastName} = require ('./printName');

printName(`Fillipe Augusto ${lastName}`); 


// Using native modules 
const os = require('os');
console.log(os.type());