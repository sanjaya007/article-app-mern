const express = require("express");
const route = express.Router();
const {
  getUsers,
  addUser,
  loginUser,
  changePassword,
  getProfileInfo,
  googleLogin,
} = require("../handlers/userHandler");

const {
  getArticles,
  getArticleById,
  addArticle,
  editArticle,
  deleteArticle,
  addViews,
} = require("../handlers/articleHandler");
const { authenticateToken } = require("../middleware/authenticate");
const { addComment, getComments } = require("../handlers/commentHandler");

// user
route.get("/users", authenticateToken, getUsers);
route.post("/user/add", addUser);
route.post("/user/login", loginUser);
route.post("/user/google-login", googleLogin);

//change password
route.patch("/user/change-password/:id", changePassword);

// article
route.get("/articles/:pageNumber", getArticles);
route.get("/article/:id", getArticleById);
route.post("/article/add", authenticateToken, addArticle);
route.put("/article/edit/:id", authenticateToken, editArticle);
route.delete("/article/delete/:id", authenticateToken, deleteArticle);

// add views
route.post("/article-add-views/:id", addViews);

// token info
route.post("/profile_info", getProfileInfo);

// comments
route.post("/comment/add", authenticateToken, addComment);
route.get("/comment/:articleId", getComments);

module.exports = route;
