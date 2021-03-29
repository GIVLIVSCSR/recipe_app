const router = require('express').Router();
const controller = require('./controller');
//const validateInput = require('../utils/validateInput');

router.post('/', 
	controller.validation,
	controller.signup
);

//router.post('/test',
//	controller.testuser
//);

module.exports = router;