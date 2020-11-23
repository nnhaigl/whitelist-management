const logger = require('./logger')();

module.exports = {
  successResponse: (res, body) => {
    logger.info(`Response success with body = ${JSON.stringify(body)}`);
    return res.status(200).json(body);
  },
  errorResponse: (res, error, statusCode) => {
    logger.info(
      `Response error with status = ${statusCode} body = ${JSON.stringify(
        error
      )}`
    );
    return res.status(statusCode).json({ errors: error });
  },
};
