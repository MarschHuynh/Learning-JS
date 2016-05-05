var Database = require('warehouse');
var db = new Database();
 
var Post = db.model('posts', {
  title: String,
  created: {type: Date, default: Date.now}
});
 
Post.insert({
  title: 'Hello world'
}).then(function(post){
  console.log(post);
});