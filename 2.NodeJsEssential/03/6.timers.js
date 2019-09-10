const waitTime = 3000;

console.log(`Setting a ${waitTime / 100} seconds delay`);

const timerFinished = () => process.stdout.write('Done');

setTimeout(timerFinished, waitTime);
