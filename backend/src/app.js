require('dotenv').config();
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const asyncHandler = require('./middleware/async.middleware');
const errorHandler = require('./middleware/error.middleware');
const { NotFoundError } = require('./helpers/error.response');
const corsOptions = require('./configs/config.cors');

const app = express();

// Security middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(xss());
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);
app.use(hpp());
app.use(cors(corsOptions));

// init db
require('./initializers/init.mongodb');

// init routes
app.use('/', require('./routes/v1'));

// error handler
app.all(
  '*',
  asyncHandler(async () => {
    throw new NotFoundError('The requested resource was not found');
  })
);
app.use(errorHandler);

module.exports = app;
