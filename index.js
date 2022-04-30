const express = require('express');
const puppeteer = require('puppeteer-core');
const chrome = require('chrome-aws-lambda');

const app = express();
const port = 3000;

function puppeteerLogger(page) {
  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
}

async function init() {
  const browser = await puppeteer.launch(
    process.env.NODE_ENV === 'production'
      ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
      : {},
  );
  const imdbUrl = 'https://www.imdb.com/user/ur60351403/watchlist';
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(imdbUrl);
  puppeteerLogger(page);
  const itemIds = await page.evaluate(async () => {
    const { items } = window.IMDbReactInitialState[0].list;
    console.log(items[0]);

    return items.map((item) => item.const);
  });
  console.log(itemIds);
  await browser.close();
  return itemIds;
}

app.get('/', async (req, res) => {
  const itemIds = await init();
  res.send({
    hello: 'Hello new World',
    data: itemIds,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
