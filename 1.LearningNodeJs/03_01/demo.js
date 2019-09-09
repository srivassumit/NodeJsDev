var fs = require('fs');

var data = require('./data.json');

// console.log(data);
console.log(data.name);

fs.readFile('./data.json', 'UTF-8', (err, data) => {
//   console.log(data);
  var data = JSON.parse(data);
  console.log(data.name);
});
