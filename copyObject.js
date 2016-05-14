var x = {myProp: 5,func : function(){return this.myProp*2}};
var y = Object.assign({}, x); 
y.myProp = 6
console.log(x.func(),y.func());