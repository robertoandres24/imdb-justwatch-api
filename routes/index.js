const express = require('express');
const watchlistRouter = require('./watchlist');
const { serve, setup } = require('../utils/swagger');

const router = express.Router();

router.use('/docs', serve, setup());

router.use('/watchlist', watchlistRouter);

module.exports = router;
