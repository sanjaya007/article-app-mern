const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const fileUpload = require("express-fileupload");
const route = require("./routes/routes");

require("./database/connection");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// route
app.use(route);

const port = process.env.APP_PORT;
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
