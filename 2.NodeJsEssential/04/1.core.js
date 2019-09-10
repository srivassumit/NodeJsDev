// path core module
const path = require('path');
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);

// util core module
const util = require('util');
util.log(path.basename(__filename));
util.log(' ^ The name of the current file.');

// v8 core module
const v8 = require('v8');
util.log(v8.getHeapStatistics());

// destructuring
const { getHeapStatistics } = require('v8');
util.log(getHeapStatistics());
