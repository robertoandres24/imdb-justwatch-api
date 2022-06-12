require('dotenv').config();

const express = require('express');
const watchlist = require('./api/watchlist');
const dbConnect = require('./db/dbConnect');
const DBService = require('./db/DBService');

const app = express();
const port = process.env.PORT || 3000;

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
