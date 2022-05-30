const express = require('express');
const DBService = require('../db/DBService');
const ImdbItem = require('../db/models/ImdbItem');
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
router.post('/', async (req, res) => {
  try {
    const item = new ImdbItem({
      id: 'jhg987987987',
    });
    await item.save();
    return res.json({
      status: 200,
      message: 'item saved',
      data: item,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error saving item');
  }
});
router.delete('/', async (req, res) => {
  try {
    await ImdbItem.collection.drop();
    return res.json({
      status: 200,
      message: 'all  items deleted',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error deleting items');
  }
});

module.exports = router;
