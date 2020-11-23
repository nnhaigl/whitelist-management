const express = require('express');
const bodyParser = require('body-parser');
const {
  correlationIdMiddeware,
  requestLoggingMiddleware,
} = require('./src/middlewares');
const routes = require('./src/routes');
const { errorHandler } = require('./src/utils');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());
app.disable(`x-powered-by`);
app.use(correlationIdMiddeware);
app.use(requestLoggingMiddleware);
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/test', express.static('TestCoverageReportTemp'));
const server = require('http').Server(app);
app.use(errorHandler);

module.exports = app;
