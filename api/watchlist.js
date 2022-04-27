const express = require('express');
const imdbScrapper = require('../scrappers/imdbScrapper');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const imdbList = await imdbScrapper.run();
    return res.json({
      status: 200,
      message: 'Get data has successfully',
      data: imdbList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
