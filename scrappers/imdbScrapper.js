// in localhost use puppeteer, in prod puppeteer-core
const puppeteer = require('puppeteer-core');
const chrome = require('chrome-aws-lambda');
const { puppeteerLogger } = require('../utils');
const ImdbItem = require('../db/models/ImdbItem');

async function saveItem(itemId) {
  const item = await ImdbItem.findOne({ id: itemId });
  if (item) {
    return item.id;
  }
  const newItem = new ImdbItem({ id: itemId });
  await newItem.save();
  return newItem.id;
}

async function initPuppeteer() {
  const browser = await puppeteer.launch(
    process.env.NODE_ENV === 'production'
      ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
      : {},
  );
  return browser;
}

async function getImdbList(browser) {
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
  const items = await Promise.all(itemIds.map((itemId) => saveItem(itemId)));
  await browser.close();
  return items;
}

async function runImdbScrapper() {
  try {
    const browser = await initPuppeteer();
    const imdbList = await getImdbList(browser);
    return imdbList;
  } catch (error) {
    return JSON.stringify(error);
  }
}

module.exports = { runImdbScrapper };
