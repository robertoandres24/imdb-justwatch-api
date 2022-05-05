const mongoose = require('mongoose');

const schema = mongoose.Schema({
  id: String,
});

module.exports = mongoose.model('ImdbItem', schema);
