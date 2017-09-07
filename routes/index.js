var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = new csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	var products = Product.find(function (err, docs) {
		var chunks = [];
		var size = 3;
		for (var i=0; i<docs.length; i+=size)
			chunks.push(docs.slice(i, i + size));
		console.log(chunks.length);
		res.render('shop/index', { title: 'Shopping Cart', products: chunks });		
	});
});

router.get('/user/signup', function(req, res, next) {
	res.render('user/signup', { csrfToken: req.csrfToken() });
});

router.post('/user/signup', function(req, res, next) {
	res.redirect('/');
});

module.exports = router;
