const router = require('express').Router();
const { verifyUser, decodeToken, getFreshUser } = require('./auth');
const controller = require('./controller');

router.post('/signin', verifyUser(), controller.signin);
router.post('/test', decodeToken(), getFreshUser());

module.exports = router;