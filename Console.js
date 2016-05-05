TestConsole = function(){
  this.store = {
    help : function(){
      data = "Help"
      console.log(data)
    },
    init : function(){
      data = "Init"
      console.log(data)     
    }
  }
}

TestConsole.prototype.get = function(name){
  this.store[name]()
}

tyy = new TestConsole;
tyy.get("init")