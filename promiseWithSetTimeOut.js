
Promise.resolve().then(() => console.log('promise1 resolved'));
Promise.resolve().then(() => console.log('promise2 resolved'));

setTimeout(() => console.log('setTimeOut called!!'), 0);
setImmediate(() => console.log('setImmediate called!'));