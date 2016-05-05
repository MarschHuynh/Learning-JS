const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

myEmitter.on('event', function() {
      console.log("Two")
});

myEmitter.on('event2', function() {
      console.log("Two-2")
});

myEmitter.removeAllListeners('event')

myEmitter.emit('event')
myEmitter.emit('event2')
