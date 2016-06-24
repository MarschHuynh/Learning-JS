var Stream = require('stream')
var Readable = Stream.Readable;
var Writeable = Stream.Writable;
var Transform = Stream.Transform;

var data = require('./data')

var ReadStream = function() {
	Readable.call(this,{objectMode: true});
	this.data = data;
	this.curIndex = 0;
}

require('util').inherits(ReadStream,Readable);

ReadStream.prototype._read = function(){
	if (this.curIndex == 10) 
	return this.push(null)
	this.curIndex++;
	this.push(this.curIndex)
}

var WriteStream = function() {
	Writeable.call(this,{objectMode: true});
	this.data = data;
	this.curIndex = 0;
}

require('util').inherits(WriteStream,Writeable);

WriteStream.prototype._write = function(chuck,encoding,callback){
	console.log("Write",JSON.stringify(chuck));
	callback();
}

var TransformStream = function() {
	Transform.call(this,{objectMode: true})
}

require('util').inherits(TransformStream,Transform);

TransformStream.prototype._transform = function(chuck,encoding,callback) {
	this.push(chuck*2);
	callback();
}

readStream = new ReadStream();
writeSteam = new WriteStream();
transformStream = new TransformStream();

readStream.pipe(transformStream).pipe(writeSteam);

