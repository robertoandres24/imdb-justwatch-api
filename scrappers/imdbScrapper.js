const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

const imdbUrl = 'https://www.imdb.com/user/ur60351403/watchlist';
const lastPosition = [];
const CHROME_DEBUG = process.env.CHROME_DEBUG === 'true' || false;

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
      devtools: CHROME_DEBUG,
      args: ['--window-size=1920,1080'],
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(imdbUrl);

    await loadMoreProgramatically(page);

    const lista = await page.evaluate(() => {
      const list = document.querySelectorAll('.lister-item');
      return Array.from(list).map((l) => {
        const title = l.querySelector('.lister-item-header').innerText;
        const details = l.querySelector('.lister-item-details').innerText;
        return { title, details };
      });
    });
    console.log({ lastPosition, listaLength: lista.length });
    await browser.close();
    return lista;
  } catch (err) {
    console.log('🚀 ERROR: ', err);
    return err;
  }
}

async function getListCount() {
  try {
    const browser = await puppeteer.launch({
      devtools: CHROME_DEBUG,
      args: ['--window-size=1920,1080'],
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(imdbUrl);

    const total = await page.evaluate(() => {
      const counter = document.querySelector('.lister-details');
      return +counter.innerText.split(' ')[0];
    });
    return total;
  } catch (err) {
    console.log('🚀 ERROR: ', err);
    return err;
  }
}

module.exports = { getImdbList, getListCount };
