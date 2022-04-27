const express = require('express');
const imdbScrapper = require('../scrappers/imdbScrapper');

let imdbList = [];
imdbScrapper.run()
  .then((list) => {
    console.log('Imdb List: ', list);
    imdbList = list;
  })
  .catch((e) => console.log('Error Trying to get Imdb List: ', e));

const router = express.Router();

router.get('/', async (req, res) => {
  try {
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
