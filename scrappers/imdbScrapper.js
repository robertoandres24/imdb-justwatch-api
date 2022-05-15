const puppeteer = require('puppeteer');

const imdbUrl = 'https://www.imdb.com/user/ur60351403/watchlist';

async function getImdbList() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(imdbUrl);
    const list = await page.waitForSelector('.lister-list');
    const lista = await list.$$eval('.lister-item', (nodes) => nodes.map((n) => n.querySelector('.lister-item-header a').innerText));
    console.log('🚀 ~ file: imdbScrapper.js ~ line 25 ~ lista', lista);

    await browser.close();
    return lista;
  } catch (err) {
    console.error(err);
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
