const User = require('./userModel');
const validator = require('validator');
const _ = require('lodash');

exports.validationChangePassword = (req, res, next) => {
	let errors = {};

	const user = req.user;
	const password = req.body.password;
	const newPassword = req.body.newPassword;
	const newPasswordConfirmation = req.body.newPasswordConfirmation;

	if(_.isEmpty(password)) {
		errors.password = 'This field is required on change-password';
	};

	if(!user.authenticate(password) && password != '') {
		errors.password = 'Wrong password on change-password';
	};

	if(_.isEmpty(newPassword)) {
		errors.newPassword = 'This field is required';
	};

	if(_.isEmpty(newPasswordConfirmation)) {
		errors.newPasswordConfirmation = 'This field is required on change-password';
	} else if(!validator.equals(newPassword, newPasswordConfirmation) && newPassword !== '') {
		errors.newPasswordConfirmation = 'Passwords must match on change-password';
	};

	if(!_.isEmpty(errors)) {
		return res.json(errors);
	};

	next();

	//res.send([ req.user, req.body ]);
};

exports.changePassword = (req, res) => {
	User.findById(req.user._id)
		.then(user => {
			if(!user) {
				return res.status(401).send('No user was found');
			} else {
				user.password = req.body.newPassword;
				user.save(err => { 
					if(err) {
						console.log(err);
					};
					res.send(`Password is updated ${req.body.newPassword}`);
				});
			};
		})
		.catch(err => console.log(err));
};
// owner true | false, 
exports.showProfile = (req, res) => {
	res.send({ body: req.body, auth: req.auth, owner: req.owner, userId: req.userId, params: req.params.userId });
};

exports.hasToken = (req, res, next) => {
	if(_.isEmpty(req.headers.authorization)) {
		req.auth = false;
		next('route');
	} else {
		next();
	};
};

exports.isOwner = (req, res, next) => {
	req.auth = true;
	if(req.userId == req.params.userId) {
		req.owner = true;
		next();
	} else {
		req.owner = false;
		next();
	};
};

exports.createItem = (req, res) => {
	if(!req.auth || !req.owner) {
		res.send({ accessToCreateItem: false });
	}; 
	if(req.owner) {
		res.send({ accessToCreateItem: true });
	};
};

exports.deleteItem = (req, res) => {
	if(!req.auth || !req.owner) {
		res.send({ accessToDeleteItem: false });
	}; 
	if(req.owner) {
		res.send({ accessToDeleteItem: true });
	};
};