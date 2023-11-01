const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String,
  type: String,
});

const Media = mongoose.model("Media", MediaSchema);

module.exports = Media;
