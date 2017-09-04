var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'https://media.playstation.com/is/image/SCEA/dark-souls-iii-dlc-2-two-column-art-01-ps4-us-23jan17?$image_block_desktop$',
		title: 'Dark Souls 3',
		description: 'Best franchise ever!!',
		price: 12
	}),
	new Product({
		imagePath: 'https://vignette2.wikia.nocookie.net/metroid/images/0/06/Super_Metroid_title.png/revision/latest?cb=20120817181754',
		title: 'Super Metroid',
		description: 'Best SNES game!!',
		price: 12
	}),
	new Product({
		imagePath: 'http://cdn.collider.com/wp-content/uploads/2016/11/the-last-of-us.jpg',
		title: 'The last of us!!',
		description: 'Best game of all time!!',
		price: 12
	})
];

var done = 0;
for (var i=0; i < products.length; i++) {
	products[i].save(function (err, result){
		done++;
		if (done === products.length)
			exit();
	});
}

function exit() {
	mongoose.disconnect();
}