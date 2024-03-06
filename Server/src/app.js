require('dotenv').config();
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// init db
require('./dbs/init.mongodb');

// init routes
app.use('/', require('./routes/v1'));

// handling error
app.use((req, res, next) => {
  const error = new Error(
    '404 Not Found: The requested resource was not found.'
  );
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    stack: error.stack, // Error Description
    message: error.message || 'Internal Server Error',
  });
});

module.exports = app;
