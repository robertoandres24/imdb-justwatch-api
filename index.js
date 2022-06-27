require('dotenv').config();

const express = require('express');

const apiRoutes = require('./routes');
const dbConnect = require('./db/dbConnect');

const app = express();
const port = process.env.PORT || 3000;

dbConnect()
  .then(async () => {
    console.log('Database connected!');
    console.log('process.env.NODE_ENV');
    console.log(process.env.NODE_ENV);

    app.use('/api', apiRoutes);

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  })
  .catch((e) => console.log(e));
