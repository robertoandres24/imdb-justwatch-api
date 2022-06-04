require('dotenv').config();

const express = require('express');
const watchlist = require('./api/watchlist');
const dbConnect = require('./db/dbConnect');
const DBService = require('./db/DBService');

const app = express();
const port = process.env.PORT || 3000;

/**
 * TODO:
 * [x] try to get if item is Movie or TV-show
 * [x] remove all special characters from titles:
       const str = "abc's test#s";
       console.log(str.replace(/[^a-zA-Z ]/g, ""));
 * [x] Go Justwatch Url like this:
       https://www.justwatch.com/us/movie/schindlers-list
 * [ ] clean characters with accents e.g. Amélie => amelie
 */

dbConnect()
  .then(async () => {
    console.log('Database connected!');
    console.log('process.env.NODE_ENV');
    console.log(process.env.NODE_ENV);

    app.get('/', async (req, res) => {
      res.json({
        hello: 'world',
        list: await DBService.getAll(),
      });
    });

    app.use('/api/watchlist', watchlist);

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  })
  .catch((e) => console.log(e));
