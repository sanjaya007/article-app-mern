const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const fileUpload = require("express-fileupload");

const {
  getUsers,
  addUser,
  loginUser,
  changePassword,
  getProfileInfo,
} = require("./handlers/userHandler");

const {
  getArticles,
  getArticleById,
  addArticle,
  editArticle,
  deleteArticle,
} = require("./handlers/articleHandler");
require("./database/connection");

const { authenticateToken } = require("./middleware/authenticate");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// user
app.get("/users", authenticateToken, getUsers);
app.post("/user/add", addUser);
app.post("/user/login", loginUser);

//change password
app.patch("/user/change-password/:id", changePassword);

// article
app.get("/articles", getArticles);
app.get("/article/:id", getArticleById);
app.post("/article/add", authenticateToken, addArticle);
app.put("/article/edit/:id", authenticateToken, editArticle);
app.delete("/article/delete/:id", authenticateToken, deleteArticle);

// token info
app.post("/profile_info", getProfileInfo);

const port = process.env.APP_PORT;
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
