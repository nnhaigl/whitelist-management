const winston = require(`winston`);
const correlationId = require('./correlation_id');

module.exports = (opts = {}) => {
  const {
    level = `info`,
    getCorrelationId = correlationId.getId,
    noCorrelationIdValue = `nocorrelation`,
  } = opts;

  return winston.createLogger({
    format: winston.format.combine(
      winston.format((info) => {
        info.correlationId = getCorrelationId() || noCorrelationIdValue;
        return info;
      })(),
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.colorize(),
      winston.format.printf(({ timestamp, correlationId, level, message }) => {
        return `${timestamp} (${correlationId}) - ${level}: ${message}`;
      })
    ),
    level,
    transports: [new winston.transports.Console()],
    exitOnError: false,
  });
};
