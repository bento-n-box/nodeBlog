var posts = [
	{
		id: 1,
		title: "Hello World",
		body: "This is the body", 
	},
	{
		id:2,
		title:"I have a little node",
		body:"THis is my second body"
	}
];

var PostsController = {
	
	index: function(req, res){
		res.render('posts/index', {posts:JSON.stringify(posts)});	
	},
	detail:function(req, res){},
	create:function(req, res){},
	edit:function(req, res){},
	destroy:function(req, res){}
};

module.exports = PostsController;