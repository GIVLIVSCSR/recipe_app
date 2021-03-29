const router = require('express').Router();
const controller = require('./itemController');
const auth = require('../../auth/auth');

router.use(controller.isAuth);
router.post('/add/:id', 
	controller.isAuth,
	auth.decodeToken(),
	auth.getFreshUser(),
	//auth.checkUserToken, 
	controller.addItem
);

module.exports = router;