const express = require('express');
const imdbScrapper = require('../scrappers/imdbScrapper');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    return res.json({
      status: 200,
      message: 'Get data has successfully',
      data: await imdbScrapper.run(),
      foo: 'bar',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
