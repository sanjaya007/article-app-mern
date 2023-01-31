const UserModel = require("../models/User");

// get users from db then return
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    console.log(users);
    res.json({
      users: users,
    });
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req, res) => {
  try {
    const body = req.body;

    if (body.name === "") {
      res.json({
        success: false,
        message: "name khali vayo !",
      });
      return false;
    }

    const user = new UserModel({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    user.save();

    res.json({
      success: true,
      message: "User added successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  addUser,
};
