"use strict"
var modl = require('./module');
var store = {}

var fn = function(data){
	console.log("Some thing here",data)
}

store["one"] = fn;

store["one"].output = "txt"
store["one"].compile = "asf"

console.log(store["one"].output)

var modl = function(){
	return function(data){
		console.log("Ne-Function",data);
	}
}

var test = modl();

console.log(test.toString());