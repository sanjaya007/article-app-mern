const express = require("express");
const app = express();
require("dotenv").config();

const fileUpload = require("express-fileupload");

const {
  getUsers,
  addUser,
  loginUser,
  changePassword,
} = require("./handlers/userHandler");

const {
  getArticles,
  addArticle,
  editArticle,
  deleteArticle,
} = require("./handlers/articleHandler");
require("./database/connection");

const { authenticateToken } = require("./middleware/authenticate");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

app.use("/uploads", express.static("uploads"));

// user
app.get("/users", authenticateToken, getUsers);
app.post("/user/add", addUser);
app.post("/user/login", loginUser);

//change password
app.patch("/user/change-password/:id", changePassword);

// article
app.get("/articles", authenticateToken, getArticles);
app.post("/article/add", addArticle);
app.put("/article/edit/:id", editArticle);
app.delete("/article/delete/:id", deleteArticle);

const port = process.env.APP_PORT;
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
