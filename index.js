const express = require('express');
const watchlist = require('./api/watchlist');

const dbConnect = require('./db/dbConnect');
const ImdbItem = require('./db/models/ImdbItem');

const { runImdbScrapper } = require('./scrappers/imdbScrapper');

dbConnect()
  .then(async () => {
    console.log('Database connected!');
    console.log('Srapping ....');
    const imdbItemIds = await runImdbScrapper();
    console.log('🚀 ~ file: index.js ~ line 12 ~ .then ~ imdbItemIds', imdbItemIds);
    const app = express();
    const port = 3000;

    app.get('/', async (req, res) => {
      const imdbItems = await (await ImdbItem.find()).map((item) => item.id);
      res.send({
        hello: 'Hello new World',
        foo: 'bar',
        imdbItems,
      });
    });

    app.use('/api/watchlist', watchlist);

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
