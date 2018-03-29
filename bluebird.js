const BlueBird = require('bluebird');
//BlueBird.setScheduler(process.nextTick);

setTimeout(() => console.log('setTimeOut called!!'), 0);
setImmediate(() => console.log('setImmediate called!'));
process.nextTick(() => console.log('next tick'));

Promise.resolve().then(() => console.log('promise1 resolved'));
Promise.resolve().then(() => console.log('promise2 resolved'));
Promise.resolve().then(() => console.log('promise3 resolved'));
BlueBird.resolve().then(() => console.log('bluebird promise resolved'));
