var path = require('path');

console.log(__dirname);
console.log(`The filename is ${__filename}`);
console.log(`The filename is ${path.basename(__filename)}`);
