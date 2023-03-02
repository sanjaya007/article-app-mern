const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

module.exports = {
  createToken: function (payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    return token;
  },
  verifyToken: function (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded;
  },
  imageValidation: function (mimeType, res) {
    if (!mimeType.startsWith("image")) {
      res.json({
        success: false,
        message: "Invalid file type !",
      });
      return false;
    }

    return true;
  },
  uploadImage: function (dir, imageFile) {
    let imageFileName = null;
    const hashedFileName = imageFile.md5;
    const extension = path.extname(imageFile.name);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    imageFileName = hashedFileName + extension;

    imageFile.mv(dir + "/" + imageFileName, function (err) {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          message: "Something went wrong.",
        });
      }
    });

    return imageFileName;
  },
  sendMail: async function (from, to, subject, html) {
    try {
      var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ca3035e4ee12ec",
          pass: "f44c65f673fa2b",
        },
      });

      let info = await transporter.sendMail({
        from,
        to,
        subject,
        html,
      });

      console.log(info);
    } catch (error) {
      console.log(error);
    }
  },
};
