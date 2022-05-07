function puppeteerLogger(page) {
  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
}
function isProd() {
  return process.env.NODE_ENV === 'production';
}

module.exports = { puppeteerLogger, isProd };
