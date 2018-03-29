'use strict';
const fs = require('fs');


function useProcessNextTick(count) {
	if(count == 0) return;
	process.nextTick(function(){
        console.log(`process.nextTick call ${count}`);
        useProcessNextTick(--count);
    });
}

setTimeout(function(){
	console.log("Yay setTimeout called!");
},0);

setImmediate(function(){
	console.log("Yay setImmediate called!");
});

fs.readFile(__filename, function() {
	console.log("Yay file reading complete!!!");
})

useProcessNextTick(5);