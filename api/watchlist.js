const express = require('express');
const ImdbItem = require('../db/models/ImdbItem');

const router = express.Router();

router.get('/', async (req, res) => {
  const ImdbItemList = await (await ImdbItem.find()).map((item) => item.id);
  try {
    return res.json({
      status: 200,
      message: 'Get itemIds',
      data: ImdbItemList,
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
