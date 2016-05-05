
var getData = function(url){
  promise = function(pro){
    for(i=0;i<10000000;i++)
    date = new Date();
    pro(url+date);
    return this
  }
  return {"then":promise}
}

getData("skymarsch.xyz")
  .then(function(data){
    console.log("1",data)
  })
  .then(function(data){
    console.log("2",data)
  })
  .then(function(data){
    console.log("3",data)
  })
