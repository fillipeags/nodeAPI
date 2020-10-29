const modulo = require ("./printName")
const os = require('os');

console.log(os.type());

modulo.printName(`Fillipe ${modulo.lastName}`);