Promise.resolve().then(() => console.log('promise1 resolved'));
Promise.resolve().then(() => console.log('promise2 resolved'));

setTimeout(() => console.log('setTimeOut called!!'), 0);
setImmediate(() => console.log('setImmediate called!'));

process.nextTick(() => console.log('next tick1'));
process.nextTick(() => console.log('next tick2'));
process.nextTick(() => console.log('next tick3'));


Promise.resolve().then(() => {
    console.log('promise3 resolved');
    process.nextTick(() => console.log('next tick inside promise resolve handler'));
});

const fs = require('fs');
fs.readFile(__filename, () => console.log('file reading complete'));