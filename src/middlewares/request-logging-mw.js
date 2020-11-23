const { logger } = require('../utils');

module.exports = (req, res, next) => {
    logger.info(`InComming Request ${req.method} ${req.path}`)
    next();
};
