// the process global object
console.log(process.pid);

console.log(process.versions.node);

// program arguments
console.log(process.argv);

// read args through array index
//node 3.globalProcess.js Sumit S
const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);

// read args through flags
//node 3.globalProcess.js --user Sumit --greeting Namaste
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const greeting = grab('--greeting');
const user = grab('--user');
console.log(`${greeting} ${user}`);
