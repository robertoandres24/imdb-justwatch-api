const { default: axios } = require('axios');
const express = require('express');
// const imdbScrapper = require('../scrappers/imdbScrapper');

const router = express.Router();

async function getTodo() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

router.get('/', async (req, res) => {
  try {
    const { data: todo } = await getTodo();
    console.log(todo);
    return res.json({
      status: 200,
      message: 'Get data has successfully',
      data: todo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
