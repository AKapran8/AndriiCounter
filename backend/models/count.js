const mongoose = require("mongoose");

const countSchema = mongoose.Schema({
  date: { type: String, required: true},
});

module.exports = mongoose.model("Count", countSchema);
