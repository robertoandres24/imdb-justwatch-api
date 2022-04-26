const puppeteer = require('puppeteer');

(async () => {
  const imdbUrl = 'https://www.imdb.com/user/ur60351403/watchlist';
  const browser = await puppeteer.launch();
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
