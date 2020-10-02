var mongoose = require("mongoose");

const msgSchema = mongoose.Schema({
  message: String,
  author: String,
  ts: Number,
});

module.exports = mongoose.model("Message", msgSchema);
