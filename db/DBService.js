const ImdbItem = require('./models/ImdbItem');

const DBService = {
  async getAll() {
    return (await ImdbItem.find()).map((item) => item.id);
  },
  async findOne(id) {
    return ImdbItem.findOne({ id });
  },
};

module.exports = DBService;
