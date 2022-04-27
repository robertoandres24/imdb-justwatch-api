const { puppeteerLogger } = require('../utils');

async function initPuppeteer() {
  /* eslint-disable global-require */
  let chrome = {};
  let puppeteer;

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  // running on the Vercel platform.
    chrome = require('chrome-aws-lambda');
    puppeteer = require('puppeteer-core');
  } else {
  // running locally.
  // eslint-disable-next-line import/no-extraneous-dependencies
    puppeteer = require('puppeteer');
  }
  const browser = await puppeteer.launch({
    defaultViewport: chrome.defaultViewport,
    executablePath: await chrome.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });
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
  await browser.close();
  return itemIds;
}

async function run() {
  try {
    const browser = await initPuppeteer();
    const imdbList = await getImdbList(browser);
    return imdbList;
  } catch (error) {
    return JSON.stringify(error);
  }
}

module.exports = { run };
