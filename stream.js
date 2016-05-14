var fs     = require('fs');
var Stream = require('stream');
var src    = new Stream();
var dest   = fs.createWriteStream('file.txt');

src.readable = true;
 
dest.writable = true;
// dest.write = function(data) {
//   console.log(data);
// };
 
src.pipe(dest);
 
src.emit('data', 'Some thing here\n');
src.emit('data', 'Some thing new here');