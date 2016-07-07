'use strict'

var fs = require('fs')
var JSONStream = require('JSONStream')

var src = fs.createReadStream('./dbStream.json', {encoding: 'utf8'});

var stream = JSONStream.parse(['rows', true],function(value,key){
	console.log("VALUE",value);
	console.log("KEY",key);
}) //rows, ANYTHING, doc 
 
stream.on('data', function(data) {
  console.log('received:', data);
});

src.pipe(stream)