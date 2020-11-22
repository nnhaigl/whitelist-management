const express = require('express');
const { body, validationResult } = require('express-validator');
const route = express.Router();
const { userService } = require('../services');
const { response } = require('../utils');
const { constants } = require('../common');
const { validationMiddleware } = require('../middlewares');
const { encrypt } = require('../utils');

route.post(
  '/login',
  [body('email').isEmail(), body('password').notEmpty(), validationMiddleware],
  async (req, res) => {
    const { email, password } = req.body;
    const users = await userService.findUser(email);
    if (users.length === 0) {
      return response.errorResponse(res, constants.errors.LOGIN_FAIL, 401);
    }
    if ((await encrypt.compare(password, users[0].password)) === false) {
      return response.errorResponse(res, constants.errors.LOGIN_FAIL, 401);
    }
    return response.successResponse(res, {
      name: users[0].name,
      access_token: encrypt.generateToken(users[0].id,email),
    });
  }
);

module.exports = route;
