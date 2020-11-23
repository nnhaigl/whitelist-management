module.exports = {
  correlationIdMiddeware: require('./express-correlation-id-mw'),
  validationMiddleware: require('./validation.middleware'),
  authorizationMiddleware: require('./authorization.middleware'),
  requestLoggingMiddleware: require('./request-logging-mw'),
};
