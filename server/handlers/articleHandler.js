const fs = require("fs");
const path = require("path");
const ArticleModel = require("../models/Article");

const getArticles = async (req, res) => {
  try {
    res.send("Hello");
  } catch (error) {
    console.log(error);
  }
};

const addArticle = async (req, res) => {
  try {
    const body = req.body;
    const imageFile = req.files.image;
    const hashedFileName = imageFile.md5;
    const extension = path.extname(imageFile.name);

    if (!imageFile.mimetype.startsWith("image")) {
      res.json({
        success: false,
        message: "Invalid file type !",
      });
      return false;
    }

    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }

    imageFile.mv("uploads/" + hashedFileName + extension, function (err) {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          message: "Something went wrong.",
        });
      }
    });

    const article = new ArticleModel({
      title: body.title,
      description: body.description,
      author: body.author,
      image: "uploads/" + imageFile.name,
    });

    article.save();

    res.json({
      success: true,
      message: "Article created successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

const editArticle = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getArticles,
  addArticle,
  editArticle,
};
