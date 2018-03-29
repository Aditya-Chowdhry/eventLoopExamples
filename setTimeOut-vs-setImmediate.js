//Determine the order

//Type 1
setTimeout(function() {
    console.log('setTimeout')
}, 0);
setImmediate(function() {
    console.log('setImmediate')
});


//Type 2

const fs = require('fs');
fs.readFile(__filename, function() {
    setTimeout(function() {
        console.log('timeout');
    }, 0);
    setImmediate(function() {
        console.log('immediate');
    });
});

