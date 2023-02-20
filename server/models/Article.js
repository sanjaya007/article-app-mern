const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author_id: {
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
  },
  { timestamps: true }
);

const ArticleModel = mongoose.model("article", articleSchema);

module.exports = ArticleModel;
