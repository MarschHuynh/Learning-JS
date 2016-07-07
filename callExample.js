"use strict"

var ctx = {"data": 2,"name":"ctx"}

var fn = function(agrs,agrs2){
	console.log("Data is",this.data,this.name)
	console.log("Data is",agrs)
}


fn.call(ctx,[1,2,3,4]);