const express = require('express');
const imdbScrapper = require('../scrappers/imdbScrapper');
const { imdbWatchlistService } = require('../services');

const router = express.Router();
router.get('/scrapper', async (req, res) => {
  try {
    console.log('Srapping ....');
    await imdbWatchlistService.removeAll();
    const list = await imdbScrapper.getImdbList();
    await imdbWatchlistService.saveImdList(list);
    const DBList = await imdbWatchlistService.getAll();
    return res.json({
      total: DBList.length,
      data: DBList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('error getting itemIds');
  }
});
router.get('/isInSync', async (req, res) => {
  try {
    const listCount = await imdbScrapper.getListCount();
    const DBList = await imdbWatchlistService.getAll();
    if (listCount === DBList.length) {
      return res.json({
        isInSync: true,
        data: [],
      });
    }
    return res.json({
      isInSync: false,
      data: [],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('error getting inSync');
  }
});
router.get('/db', async (req, res) => {
  try {
    const DBList = await imdbWatchlistService.getAll();
    return res.json({
      total: DBList.length,
      data: DBList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('error getting itemIds');
  }
});
router.get('/remove', async (req, res) => {
  try {
    await imdbWatchlistService.removeAll();
    return res.json({
      status: 'removed all collection ok',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('error removing all collection');
  }
});

module.exports = router;
