const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: String,
  details: String,
});

module.exports = mongoose.model('ImdbItem', schema);
