
var PageController = require('../controllers/pagecontroller'),

route = function(app){

	app.get('/', PageController.index);

};

module.exports = route;