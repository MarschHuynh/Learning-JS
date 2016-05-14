/*
  WareHouse is a Simple JSON-based database
*/

var Database = require('warehouse');
var db = new Database();
 
var Post = db.model('posts', {
  title: String,
  content: String,
  created: {type: Date, default: Date.now}
});

var Comment = db.model('comment',{
  content: String,
  author: String,
}); 

Post.insert({
  title: 'First Post',
  content: 'This is a content of first post'
})

Comment.insert({
  author: "Marsch",
  content: "This is a comment of Marsch",
}).then(function(){
  console.log(db);
})
