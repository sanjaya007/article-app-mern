const { createToken, verifyToken } = require("../utils");
let otp = "";

const generateOTP = () => {
  for (let i = 1; i <= 6; i++) {
    const randomValue = Math.round(Math.random() * 9);
    otp += randomValue;
  }

  return otp;
};

const UserModel = require("../models/User");

// get users from db then return
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({
      users: users,
    });
  } catch (error) {
    console.log(error);
  }
};

// post user api
const addUser = async (req, res) => {
  try {
    const body = req.body;

    const user = new UserModel({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    const emailAlreadyExists = await UserModel.findOne({ email: body.email });

    if (emailAlreadyExists) {
      res.json({
        success: false,
        message: "Email already exist !",
      });
      return false;
    }

    await user.save();

    res.json({
      success: true,
      message: "User added successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

// login api
const loginUser = async (req, res) => {
  const body = req.body;

  const user = await UserModel.findOne({ email: body.email });

  if (!user) {
    res.json({
      success: false,
      message: "User not found !",
    });
    return false;
  }

  const result = await user.comparePassword(body.password);

  if (!result) {
    res.json({
      success: false,
      message: "Email or password is wrong !",
    });
    return false;
  }

  const token = createToken({
    data: {
      user_id: user._id,
      name: user.name,
      email: user.email,
    },
  });
  user.token = token;
  await user.save();

  res.cookie("auth", token);
  res.json({
    success: true,
    message: "Login successful !",
    data: {
      token,
      user_id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

const changePassword = async (req, res) => {
  try {
    const id = req.params.id;

    const body = req.body;

    const user = await UserModel.findOne({ _id: id });

    const result = await user.comparePassword(body.old_password);

    if (!result) {
      res.json({
        success: false,
        message: "Old password is wrong !",
      });
      return false;
    }

    user.password = body.new_password;

    user.save();

    res.json({
      success: true,
      message: "Password change successful !",
    });
  } catch (error) {
    console.log(error);
  }
};

const getProfileInfo = async (req, res) => {
  try {
    const token = req.body.token;
    if (!token)
      return res.json({
        success: false,
        message: "No token found !",
      });
    const tokenInfo = await verifyToken(token);
    return res.json({
      success: true,
      data: tokenInfo.data,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  addUser,
  loginUser,
  changePassword,
  getProfileInfo,
};
