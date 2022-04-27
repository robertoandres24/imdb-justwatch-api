function puppeteerLogger(page) {
  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
}

module.exports = { puppeteerLogger };
