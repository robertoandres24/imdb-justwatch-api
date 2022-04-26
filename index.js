const express = require('express');

const app = express();
const port = 3000;
const watchlist = require('./api/watchlist');

app.get('/', (req, res) => {
  res.send('Hello new World');
});

app.use('/api/watchlist', watchlist);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
