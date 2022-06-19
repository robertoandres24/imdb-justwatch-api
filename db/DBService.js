const { justWatchBaseUrl, movie, tvShow } = require('../utils/constants');
const ImdbItem = require('./models/ImdbItem');

function cleanTitle(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
    .replace(/--+/g, '-') // Replaces multiple hyphens by one hyphen
    .replace(/(^-+|-+$)/g, '') // Remove extra hyphens from beginning or end of the string
    .toLowerCase();
}

function isTvShow(details) {
  return details.toLowerCase().includes('tv series');
}
function createJustWatchUrl(item) {
  if (item.tvShow) {
    return `${justWatchBaseUrl}/${tvShow}/${item.title}`;
  }
  return `${justWatchBaseUrl}/${movie}/${item.title}`;
}
/**
 *
 * @param {{title: string, tvShow: boolean}[]} list An array of Imdb Items
 * @returns ImdbItem[]
 */
function sanitizeList(list) {
  return list.map((item) => ({
    tvShow: isTvShow(item.details),
    title: cleanTitle(item.title),
  }));
}
async function getAll() {
  const imdbList = await ImdbItem.find();
  return imdbList.map((item) => createJustWatchUrl(item));
}
async function findOne(id) {
  return ImdbItem.findOne({ id });
}
async function save(item) {
  const newItem = new ImdbItem(item);
  await newItem.save();
}
async function saveImdList(list) {
  const sanitizedList = sanitizeList(list);
  const promisesList = sanitizedList.map((item) => save(item));
  return Promise.all(promisesList);
}
async function removeAll() {
  return ImdbItem.deleteMany({});
}

module.exports = {
  getAll, findOne, saveImdList, removeAll,
};
