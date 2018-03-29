const BlueBird = require('bluebird');

BlueBird.resolve().then(() => console.log('bluebird promise 1 resolved'));
setImmediate(() => console.log('setImmediate1 called!'));
BlueBird.resolve().then(() => console.log('bluebird promise 2 resolved'));
setImmediate(() => console.log('setImmediate2 called!'));
// BlueBird.reject().catch(() => console.log('reject promise 1'));
// BlueBird.reject().catch(() => console.log('reject promise 2'));
//console.log(BlueBird.version);