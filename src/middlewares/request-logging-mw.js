const { logger } = require('../utils');

module.exports = (req, res, next) => {
    logger.info('Call Request')
};
