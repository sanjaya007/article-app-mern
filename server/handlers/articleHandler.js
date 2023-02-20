const moment = require("moment/moment");
const ArticleModel = require("../models/Article");
const { imageValidation, uploadImage } = require("../utils");

const getArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find();

    const finalArticles = [];
    articles.forEach((article) => {
      finalArticles.push({
        id: article._id,
        title: article.title,
        introduction: article.introduction,
        description: article.description,
        author_id: article.author_id,
        author: article.author,
        image: article.image,
        createdAt: article.createdAt,
      });
    });
    finalArticles.forEach((article) => {
      article.createdAt = moment(article.createdAt).fromNow();
    });

    res.json({
      success: true,
      data: finalArticles,
    });
  } catch (error) {
    console.log(error);
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    if (!article) {
      res.json({
        success: true,
        message: "Article not found !",
        data: null,
      });
      return false;
    }
    res.json({
      success: true,
      message: "Article found !",
      data: article,
    });
  } catch (error) {
    console.log(error);
  }
};

const addArticle = async (req, res) => {
  try {
    const body = req.body;
    const imageFile = req.files.image;

    if (!imageValidation(imageFile.mimetype, res)) {
      return false;
    }

    const imageFileName = uploadImage("uploads", imageFile);

    const article = new ArticleModel({
      title: body.title,
      introduction: body.introduction,
      description: body.description,
      author_id: body.author_id,
      author: body.author,
      image: "uploads/" + imageFileName,
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
    let imageFileName = null;
    const id = req.params.id;
    const body = req.body;

    if (req.files) {
      const imageFile = req.files.image;
      if (!imageValidation(imageFile.mimetype, res)) {
        return false;
      }

      imageFileName = uploadImage("uploads", imageFile);
    }

    const editArticle = await ArticleModel.findByIdAndUpdate(
      { _id: id },
      {
        title: body.title,
        introduction: body.introduction,
        description: body.description,
        author_id: body.author_id,
        author: body.author,
        image: imageFileName ? "uploads/" + imageFileName : null,
      }
    );

    res.json({
      success: true,
      message: "Article updated successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteArticle = async (req, res) => {
  const id = req.params.id;

  const deleteArticle = await ArticleModel.findByIdAndRemove({ _id: id });

  res.json({
    success: true,
    message: "Article deleted successfully!",
  });
};

module.exports = {
  getArticles,
  getArticleById,
  addArticle,
  editArticle,
  deleteArticle,
};
