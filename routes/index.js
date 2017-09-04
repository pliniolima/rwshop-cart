var express = require('express');
var router = express.Router();
var Product = require('../models/product');

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

module.exports = router;
