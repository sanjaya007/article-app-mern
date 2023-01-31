const mongoose = require("mongoose");

const dbConnection = async (req, res) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mern_app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful.");
  } catch (error) {
    console.log(error);
  }
};

dbConnection();
