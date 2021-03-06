const express = require('express');
const route = express.Router();

route.use('/user', require('./user.routes'));
route.use('/wishlist', require('./wishlist.routes'));

module.exports = route;
