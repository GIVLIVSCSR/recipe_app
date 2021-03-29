const validator = require('validator');
const isEmpty = require('lodash/isEmpty');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../api/user/userModel');

//module.exports = validateInput;