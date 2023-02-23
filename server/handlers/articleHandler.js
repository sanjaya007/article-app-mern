const fs = require("fs");
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
        views: article.views,
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

    const article = await ArticleModel.findById(id);
    if (!article)
      return res.json({
        success: false,
        message: "Article not found!",
      });

    if (article.author_id !== req.user._id.toJSON()) {
      return res.json({
        success: false,
        message: "Only author can edit!",
      });
    }

    if (req.files && req.files.image) {
      const imageFile = req.files.image;
      if (!imageValidation(imageFile.mimetype, res)) {
        return false;
      }

      fs.unlink(article.image, function (error) {
        console.log(error);
      });

      imageFileName = uploadImage("uploads", imageFile);
      article.image = imageFileName ? "uploads/" + imageFileName : null;
    }

    article.title = body.title;
    article.introduction = body.introduction;
    article.description = body.description;
    await article.save();

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

  const article = await ArticleModel.findById(id);
  if (!article)
    return res.json({
      success: false,
      message: "Article not found!",
    });

  if (article.author_id !== req.user._id.toJSON()) {
    return res.json({
      success: false,
      message: "Only author can delete!",
    });
  }

  fs.unlink(article.image, function (error) {
    console.log(error);
  });

  const deleteArticle = await ArticleModel.findByIdAndRemove({ _id: id });

  res.json({
    success: true,
    message: "Article deleted successfully!",
  });
};

const addViews = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await ArticleModel.findById(id);
    if (!article)
      return res.json({
        success: false,
        message: "Article not found!",
      });

    if (!article.viewed.includes(req.socket.remoteAddress)) {
      article.views++;
      article.viewed.push(req.socket.remoteAddress);
    }

    await article.save();

    return res.json({
      success: true,
      message: "+1 views",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getArticles,
  getArticleById,
  addArticle,
  editArticle,
  deleteArticle,
  addViews,
};
