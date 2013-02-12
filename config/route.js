
var PageController = require('../controllers/pagecontroller'),
PostsController = require('../controllers/postscontroller')

route = function(app){

	app.get('/', PageController.index);
										
	app.get('/posts', PostsController.index);
	app.get('/posts/:id', PostsController.detail);
	app.post('/posts', PostsController.create);
	app.put('/posts/:id', PostsController.edit);
	app.del('/posts/:id', PostsController.destroy);
	
	
};

module.exports = route;