const { body, validationResult } = require('express-validator');
function validation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}
module.exports = validation;
