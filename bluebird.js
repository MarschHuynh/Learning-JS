var Promise = require('bluebird');

new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { return }, 1000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);})
.catch(function(num) { console.log('last catch: ', num);});