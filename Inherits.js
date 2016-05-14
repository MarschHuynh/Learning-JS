/*Full inherit in javascript*/
'use strict';
var Obj = function(name){
  this.name = name;
}

Obj.prototype.sing = function(song) {
  console.log(this.name + " are singing " + song);
};

var Person = function(name,age){
  Obj.call(this,name); // Call construction of super class
  this.age = age
}

Person.prototype.work = function() {
  console.log(this.name + " are working.");
};

Person.prototype.introduce = function() {
  console.log("My name is " + this.name + "\n" + "I'am " + this.age + " year old");
};

require('util').inherits(Person,Obj); // Class Person inherit from class Obj

var marsch = new Person("Marsch Huynh",21);
marsch.introduce();
marsch.work();
marsch.sing("Try");
