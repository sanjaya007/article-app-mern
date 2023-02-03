const express = require("express");
const { getUsers, addUser, loginUser } = require("./handlers/userHandler");
const app = express();
require("./database/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users", getUsers);
app.post("/user/add", addUser);
app.post("/user/login", loginUser);

const port = 5000;
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
