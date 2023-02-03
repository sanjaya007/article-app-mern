const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

const ArticleModel = mongoose.model("article", articleSchema);

module.exports = ArticleModel;
