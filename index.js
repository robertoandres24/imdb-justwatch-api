const express = require('express');
const watchlist = require('./api/watchlist');
const imdbScrapper = require('./scrappers/imdbScrapper');
const { imdbList } = require('./store');

const app = express();
const port = 3000;

imdbScrapper.run()
  .then((list) => {
    imdbList.push(...list);
    console.log('Imdb List: ', imdbList);
  })
  .catch((e) => console.log('Error Trying to get Imdb List: ', e));

app.get('/', (req, res) => {
  res.send('Hello new World');
});

app.use('/api/watchlist', watchlist);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
