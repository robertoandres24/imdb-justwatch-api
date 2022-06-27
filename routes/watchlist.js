const express = require('express');
const { imdbDbService, imdbHttpService } = require('../services/imdb');

const router = express.Router();

/**
 * @swagger
 * /api/watchlist:
 *  get:
 *    description: Get All Imdb Items from DB
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/', async (req, res) => {
  try {
    const DBList = await imdbDbService.getAll();
    return res.json({
      total: DBList.length,
      data: DBList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('error getting itemIds');
  }
});

router.get('/scrapper', async (req, res) => {
  try {
    console.log('Srapping ....');
    await imdbDbService.removeAll();
    const list = await imdbHttpService.getImdbList();
    await imdbDbService.saveImdList(list);
    const DBList = await imdbDbService.getAll();
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
    const listCount = await imdbHttpService.getListCount();
    const DBList = await imdbDbService.getAll();
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

router.delete('/', async (req, res) => {
  try {
    await imdbDbService.removeAll();
    return res.json({
      status: 'removed all collection ok',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('error removing all collection');
  }
});

module.exports = router;
