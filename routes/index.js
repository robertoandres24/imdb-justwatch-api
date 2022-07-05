const express = require('express');
const watchlistRouter = require('./watchlist');

const router = express.Router();

router.use('/watchlist', watchlistRouter);

module.exports = router;
