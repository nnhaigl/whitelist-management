const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { constants } = require('../common');
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}
async function compare(password, targetPassword) {
  return bcrypt.compare(password, targetPassword);
}
function generateToken(id, email) {
  return jwt.sign(
    { id, email, iat: Math.floor(Date.now() / 1000) - 30 },
    constants.jwt_secret
  );
}

function verifyToken(token) {
  return jwt.verify(token, constants.jwt_secret);
}
module.exports = {
  hashPassword,
  compare,
  generateToken,
  verifyToken
};
