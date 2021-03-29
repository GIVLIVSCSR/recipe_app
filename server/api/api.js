const router = require('express').Router();

router.use('/item', require('./item/itemRouter'));
router.use('/users', require('./user/userRouter'));

module.exports = router;