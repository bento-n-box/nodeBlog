var PageController = {
	
	index: function(req, res) {
		res.render('index', {title: "Express Rocks"});
	}
	
};

module.exports = PageController;