const correlationId = require('./correlation_id');
module.exports = {
  logger: require('./logger')({
    getCorrelationId: correlationId.getId,
  }),
  correlationId,
  encrypt: require('./encrypt'),
  response: require('./response_handler'),
  errorHandler: require('./errorHandler'),
};
