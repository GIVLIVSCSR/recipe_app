const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api/api');
const register = require('./register/router');
const auth = require('./auth/router');
const authTest = require('./auth/auth');
const app = express();
//require('./api/user/userModel');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//app.use(validator());
//app.use(expressValidator());
app.use(authTest.decodeToken());
app.use(authTest.getFreshUser());
app.use('/api', api); 
app.use('/signup', register);
app.use('/auth', auth);

app.listen(3000, () => 
	console.log('server on port 3000')
);

