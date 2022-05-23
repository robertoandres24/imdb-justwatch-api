const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

const imdbUrl = 'https://www.imdb.com/user/ur60351403/watchlist';
const lastPosition = [];

async function loadMoreProgramatically(page) {
  lastPosition.push(await scrollPageToBottom(page, {
    size: 500,
    delay: 250,
  }));
  const button = await page.$('button.load-more');
  if (button) {
    button.click();
    return loadMoreProgramatically(page);
  } return null;
}

async function getImdbList() {
  try {
    const browser = await puppeteer.launch({
      devtools: true,
      args: ['--window-size=1920,1080'],
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(imdbUrl);

    await loadMoreProgramatically(page);

    const lista = await page.evaluate(() => {
      const list = document.querySelectorAll('.lister-item');
      return Array.from(list).map((n) => n.innerText.match(/^.+/)[0]);
    });
    console.log({ lastPosition, listaLength: lista.length });
    await browser.close();
    return lista;
  } catch (err) {
    console.log('🚀 ERROR: ', err);
    return err;
  }
}

async function runImdbScrapper() {
  try {
    const imdbList = await getImdbList();
    return imdbList;
  } catch (error) {
    return JSON.stringify(error);
  }
}

module.exports = { runImdbScrapper };
