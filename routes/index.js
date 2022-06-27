const express = require('express');
const watchlistRouter = require('./watchlist');

const apiRouter = express.Router();
require('../utils/swagger')(apiRouter);

apiRouter.use('/watchlist', watchlistRouter);

module.exports = apiRouter;
