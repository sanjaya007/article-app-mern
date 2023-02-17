const UserModel = require("../models/User");
const { verifyToken } = require("../utils");

module.exports = {
  authenticateToken: async function (req, res, next) {
    try {
      const token = req.cookies.auth || req.headers["authorization"];
      if (!token) {
        return res.send("Access denied!");
      }

      const tokenInfo = verifyToken(token);
      const user = await UserModel.findOne({
        email: tokenInfo.data.email,
        token: token,
      });
      if (!user) return res.send("Access denied!");

      req.user = user;
      next();
    } catch (error) {
      console.log(error.message);
      if (error.message === "jwt expired") res.send("Invalid token!");
    }
  },
};
