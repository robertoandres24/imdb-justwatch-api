const ImdbItem = require('./models/ImdbItem');

function cleanTitle(title) {
  return title.replace(/[^a-zA-Z0-9 ]/gm, '')
    .replace(/ /gm, '-')
    .toLowerCase();
}
/**
 *
 * @param {{title: string, details: string}[]} list An array of Imdb Items
 * @returns same properties, but sanitized
 */
function sanitizeList(list) {
  return list.map((item) => ({
    details: item.details,
    title: cleanTitle(item.title),
  }));
}
async function getAll() {
  return ImdbItem.find();
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
