var fs = require('fs');

var data = { name: 'Jason' };

fs.writeFile('data.json', JSON.stringify(data), err => {
  console.log('write finished', err);
});
