const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: String,
  tvShow: Boolean,
});

module.exports = mongoose.model('ImdbItem', schema);
