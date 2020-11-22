const { encrypt } = require('../utils');
function authorization(req, res, next) {
  console.log("==========================")
  const { authorization } = req.headers;
  if (!authorization || authorization.startsWith('Bearer') === false) {
    return res.status(401).send();
  }
  const payload = encrypt.verifyToken(authorization.split(' ')[1]);
  if (!payload) {
    return res.status(401).send();
  }
  req.res.locals.user = {
    id: payload.id,
    email: payload.email,
  };
  return next();
}
module.exports = authorization;
