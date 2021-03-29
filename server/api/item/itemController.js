const User = require('../user/userModel');
const _ = require('lodash');
//const Item = require('./item/itemModel');

exports.addItem = (req, res) => {
	res.json({ itemAdded: true, user: req.user, itemId: req.body.itemId });
};

exports.isAuth = (req, res, next) => {
	if(_.isEmpty(req.headers.authorization)) {
		return res.send('You should be logged in to add the item');
	} else {
		next();
	};
};