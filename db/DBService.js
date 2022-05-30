const ImdbItem = require('./models/ImdbItem');

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
  const promisesList = list.map((item) => save(item));
  return Promise.all(promisesList);
}
async function removeAll() {
  return ImdbItem.deleteMany({});
}

module.exports = {
  getAll, findOne, save, saveImdList, removeAll,
};
