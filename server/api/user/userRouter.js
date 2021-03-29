const router = require('express').Router();
const controller = require('./userController');
const auth = require('../../auth/auth');

router.post('/change-password', 
	auth.decodeToken(), 
	auth.getFreshUser(), 
	controller.validationChangePassword,
	controller.changePassword
);

router.get('/profile/:userId', 
	controller.hasToken, 
	auth.decodeToken(), 
	auth.getFreshUser(), 
	controller.isOwner
);

router.get('/profile/:userId', controller.showProfile);

router.post('/profile/:userId/item/create', 
	controller.hasToken, 
	auth.decodeToken(),
	auth.getFreshUser(),
	controller.isOwner,
	controller.createItem
);

router.post('/profile/:userId/item/create', controller.createItem);

router.delete('/profile/:userId/item/delete/:itemId',
	controller.hasToken, 
	auth.decodeToken(),
	auth.getFreshUser(),
	controller.isOwner,
	controller.deleteItem
);

router.delete('/profile/:userId/item/delete/:itemId', controller.deleteItem);

module.exports = router;


//profile/:userId/showProfile
//profile/:userId/itemCreate
//profile/:userId/itemDelete/:itemId