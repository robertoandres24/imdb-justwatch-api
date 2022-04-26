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

(async () => {
  const imdbUrl = 'https://www.imdb.com/user/ur60351403/watchlist';
  const browser = await puppeteer.launch({
    defaultViewport: chrome.defaultViewport,
    executablePath: await chrome.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(imdbUrl);
  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
  await page.evaluate(async () => {
    const { items } = window.IMDbReactInitialState[0].list;
    const itemIds = items.map((item) => item.const);
    console.log(itemIds[0]);
  });
  await browser.close();
})();
