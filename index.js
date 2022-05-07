require('dotenv').config();
const express = require('express');
const watchlist = require('./api/watchlist');
const dbConnect = require('./db/dbConnect');
const ImdbItem = require('./db/models/ImdbItem');
const { runImdbScrapper } = require('./scrappers/imdbScrapper');

const app = express();
const port = 3000;

dbConnect()
  .then(async () => {
    console.log('Database connected!');
    console.log('process.env.NODE_ENV');
    console.log(process.env.NODE_ENV);
    console.log('Srapping ....');
    const imdbItemIds = await runImdbScrapper();
    console.log('🚀 ~ file: index.js ~ line 12 ~ .then ~ imdbItemIds', imdbItemIds);
    app.get('/', async (req, res) => {
      const imdbItems = await (await ImdbItem.find()).map((item) => item.id);
      res.send({
        total: imdbItems.length,
        imdbItems,
        foo: process.env.foo || 'default',
      });
    });

    app.use('/api/watchlist', watchlist);

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  })
  .catch((e) => console.log(e));

module.exports = app;
