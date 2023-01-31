const express = require("express");
const { getUsers, addUser } = require("./handlers/userHandler");
const app = express();
require("./database/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users", getUsers);
app.post("/user/add", addUser);

const port = 5000;
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
