require('dotenv').config();
const { default: axios } = require('axios');
const express = require('express');
// const watchlist = require('./api/watchlist');
const dbConnect = require('./db/dbConnect');
// const ImdbItem = require('./db/models/ImdbItem');
// const { runImdbScrapper } = require('./scrappers/imdbScrapper');

const app = express();
const port = process.env.PORT || 3000;

dbConnect()
  .then(async () => {
    console.log('Database connected!');
    console.log('process.env.NODE_ENV');
    console.log(process.env.NODE_ENV);
    console.log('Srapping ....');
    const { data: todo } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('🚀 ~ file: index.js ~ line 19 ~ .then ~ todo', todo);

    // const imdbItemIds = await runImdbScrapper();
    // console.log('🚀 ~ file: index.js ~ line 12 ~ .then ~ imdbItemIds', imdbItemIds);
    app.get('/', async (req, res) => {
      // const imdbItems = await (await ImdbItem.find()).map((item) => item.id);
      const { data: theTodo, status } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      res.send({
        hello: 'world',
        theTodo,
        status,
      });
    });

    // app.use('/api/watchlist', watchlist);

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  })
  .catch((e) => console.log(e));
