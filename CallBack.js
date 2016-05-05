var getData = function(url,callback){
  console.log("Get data from url:",url);
  data = "This is a data from url:"+url;
  callback(data);
}


getData("skymarsch.xyz",function(data){
  console.log(data);
})
