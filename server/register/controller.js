const mongoose = require('mongoose');
const User = require('../api/user/userModel');
const validateInput = require('../utils/validateInput');
const isEmpty = require('lodash/isEmpty');
const validator = require('validator');
//exports.validateRegister = (req, res, next) => {
//	const { errors, isValid } = validateInput(req.body);
//	if(!isValid) {
//		res.json(errors);
//	};
//	next();
//};

exports.validation = (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then(user => {
			let errors = {};

			//if(!user) {
			//	next();
			//};
			if(user) {
				//throw new Error('Email allready exists');
				errors.email = 'Email allready exists';
			};

			if(isEmpty(req.body.username)) {
				errors.username = 'This field is required';
			};

			if(isEmpty(req.body.email)) {
				errors.email = 'This field is required';
			};

			if(!validator.isEmail(req.body.email) && req.body.email !== '') {
				errors.email = 'Email is invalid';
			};

			if(isEmpty(req.body.password)) {
				errors.password = 'This field is required';
			};

			if(isEmpty(req.body.passwordConfirmation)) {
				errors.passwordConfirmation = 'This field is required';
			};

			if(!validator.equals(req.body.password, req.body.passwordConfirmation)) {
				errors.passwordConfirmation = 'Passwords must match';
			};

			if(!isEmpty(errors)) {
				return res.json(errors);
			};
			
			next();
		})
		.catch(err => console.log(err));
};

exports.signup = (req, res) => {
	const user = new User({ 
		username: req.body.username, 
		email: req.body.email,
		password: req.body.password
	})
	user.save(err => { 
		if(err) {
			console.log(err);
		};
		res.send('user created succcessfully');
	});
};

//exports.testuser = (req, res) => {
//	User.findOne({ username: req.body.username })
//		.then(user => {
//			if(!user) {
//				res.send('test user');
//			};
//			res.json(user);
//		})
//		.catch(err => console.log(err));
//};