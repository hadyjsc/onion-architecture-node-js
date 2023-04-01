const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const authorization = require('./middlewares/authorization');
const handling = require('./middlewares/handling');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(authorization);

// Routes
app.use('/', routes);

// Error handling middleware
app.use(handling);

module.exports = app;
