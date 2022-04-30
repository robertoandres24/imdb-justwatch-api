const express = require('express');
const watchlist = require('./api/watchlist');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello new World');
});

app.use('/api/watchlist', watchlist);

console.log('AWS_LAMBDA_FUNCTION_VERSION');
console.log(process.env.AWS_LAMBDA_FUNCTION_VERSION);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
