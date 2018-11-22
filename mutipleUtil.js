
/** 
 * inherits
*/
var stream = require('stream');
var util = require('util');

function MyStream () { // step 2
  stream.Writable.call(this);
};
util.inherits(MyStream, stream.Writable); // step 1
MyStream.prototype._write = function (chunk, encoding, done) { // step 3
  console.log(chunk.toString());
  done();
}

var myStream = new MyStream(); // instanciate your brand new stream
process.stdin.pipe(myStream);

/**
 * 
 */
var stream = require('stream');
var myStream = new stream.Writable();
myStream._write = function (chunk, encoding, done) {
  console.log(chunk.toString());
  done();
};

process.stdin.pipe(myStream);

/**
 * Use the Simplified Constructor API
 */
var writable = new stream.Writable({
    write: function(chunk, encoding, next) {
      console.log(chunk.toString());
      next();
    }
});

/**
 * Use an ES6 class in Node 4+
 */
class MyStream extends stream.Writable {
    _write(chunk, enc, next) {
      console.log(chunk.toString());
      next();
    }
}
