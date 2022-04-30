const express = require('express');
const puppeteer = require('puppeteer');
const chrome = require('chrome-aws-lambda');

const router = express.Router();

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

router.get('/', async (req, res) => {
  const itemIds = await init();
  try {
    return res.json({
      status: 200,
      message: 'Get data has successfully',
      data: itemIds,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
