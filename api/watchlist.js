const express = require('express');
const DBService = require('../db/DBService');
const { getImdbList, getListCount } = require('../scrappers/imdbScrapper');

const router = express.Router();

router.get('/scrapper', async (req, res) => {
  try {
    console.log('Srapping ....');
    await DBService.removeAll();
    const list = await getImdbList();
    await DBService.saveImdList(list);
    const DBList = await DBService.getAll();
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
    const listCount = await getListCount();
    const DBList = await DBService.getAll();
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
    const DBList = await DBService.getAll();
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
    await DBService.removeAll();
    return res.json({
      status: 'removed all collection ok',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('error removing all collection');
  }
});

module.exports = router;
