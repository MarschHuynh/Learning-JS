/*
  WareHouse is a Simple JSON-based database
*/
var pathFn = require('path');
var Database = require('warehouse');
var Promise = require("bluebird");
var EventEmitter = require('events');
var Schema = require('warehouse').Schema;
var MyEvent = new EventEmitter();

var db = new Database({
    version: 1.0,
    path: pathFn.join(process.cwd(), 'db.json')
});

var Post = db.model('post', {
  title: String,
  content: String,
  created: {type: Date, default: Date.now}
});

var Comment = db.model('comment',{
  content: String,
  author: String,
}); 

Promise.all([
	Post.insertOne({
  		title: 'First Post',
  		content: 'This is a content of first post'
	}),
	Post.insertOne({
  		title: 'Second Post',
  		content: 'This is a content of second post'
	}),
	Comment.insert({
	  	author: "Marsch",
	  	content: "This is a comment of Marsch",
	}),
	Comment.insert({
	  	author: "Thien",
	  	content: "This is a comment of Thien",
	})]
).then(function(){
	console.log("Finish");
	db.save().then(function(){
		console.log("DATABASE SAVE FINISH");
		MyEvent.emit("dbSaved");
	});
})

MyEvent.on('dbSaved',function(){
	db.load().then(function(){
  		var posts = db.model('post').find({});
  		var comments = db.model('comment').find({});
	})
	MyEvent.emit('already');
});

MyEvent.on('already',function(){
	post = db.model('post');
	posts = post.toArray().map(function(post){
		post.owner = "SkyMarsch"
		// console.log("OWNER",post);
		post.save().then(function(){
			var posts = db.model('post').find({});
			// console.log(posts);
		});
	});
});


var Tag = new Schema({
	id: String,
	title: {type:String, default:''},
	content: {type:String,default:'Nothing'}
})


Tag.virtual('full_source').get(function(){
	console.log("Add getter full_source");
})



db.model('tag',Tag)
tag = db.model('tag')

tag.insert({
	title: "This is a tag",
	content: "This is a content of tag"
}).then(function(){
	console.log(tag.toArray());
});



