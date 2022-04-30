const express = require('express');
const watchlist = require('./api/watchlist');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send({
    hello: 'Hello new World',
    foo: 'bar',
  });
});

app.use('/api/watchlist', watchlist);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
