const jwt = require('jsonwebtoken');
const User = require('../api/user/userModel');
const expressJwt = require('express-jwt');
const _ = require('lodash');
//const config = require('../config/config');
const checkToken = expressJwt({ secret: 'secret' });
//check if the current user has a token
exports.decodeToken = () => {
	return (req, res, next) => {
		if(_.isEmpty(req.headers.authorization)) {
			return res.send({ user: 'not auth'});
		};
		if(req.query &&  req.query.hasOwnProperty('access_token')) {
			req.headers.authorization = `Bearer ${req.query.access_token}`;
		};
		checkToken(req, res, next);//if so -> token is checked and attaches the decoded token to the req.user
	};
};
//check if the current user with the token has signed up in db
exports.getFreshUser = (req, res, next) => {
	return (req, res, next) => {
		User.findById(req.user._id)
			.then(user => {
				if(!user) {
					res.status(401).send('Unauthorized');
				} else {
					//res.json(user);
					req.userId = user._id;
					next(); //if so -> user is checked
					//res.send(req.user, { user: 'is auth'});
				};
			})
			.catch(err => next(err));
	};
};

exports.verifyUser = () => {
	return (req, res, next) => {
		const email = req.body.email;
		const password = req.body.password;

		if(!email || !password) {
			res.status(500).send('You need email and password');
			return;
		};

		User.findOne({ email: email })
			.then(user => {
				if(!user) {
					res.status(401).send('No user with the given email');
				} else if(!user.authenticate(password)) {
					res.status(401).send('Wrong password');
				} else {
					req.user = user;
					next();
					//res.end(user);
				};
			})
			.catch(err => next(err));
	};
};

exports.signToken = (id) => {
	return jwt.sign(
		{_id: id},
		'secret'
		//{expiresOnMinutes: 5}
	);
};

//exports.checkUserToken = () => [decodeToken(), getFreshUser()];