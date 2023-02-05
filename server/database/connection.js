const mongoose = require("mongoose");

const dbConnection = async (req, res) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful.");
  } catch (error) {
    console.log(error);
  }
};

dbConnection();
