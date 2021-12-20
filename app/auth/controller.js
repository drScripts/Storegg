const {
  addData,
  checkEmail,
  signIn: signInModel,
  getDataEmail,
} = require("../player/model");
const fs = require("fs");
const { rootPath, jwtKey } = require("../../config");
const path = require("path");
const jwt = require("jsonwebtoken");

const returnData = {
  message: null,
  status: null,
  data: null,
};

const signUp = async (req, res) => {
  try {
    const { name, username, email, password, phoneNumber, favorite } = req.body;
    let payload = {};
    if (req.file) {
      const tempPath = req.file.path;
      const originExt =
        req.file.originalname.split(".")[
          req.file.originalname.split(".").length - 1
        ];
      let filename = req.file.filename + "." + originExt;
      let target_path = path.resolve(rootPath, `public/users/${filename}`);
      let src = fs.createReadStream(tempPath);
      let destDir = fs.createWriteStream(target_path);

      src.pipe(destDir);

      src.on("end", async () => {
        try {
          payload = await addData(
            email,
            password,
            phoneNumber,
            username,
            name,
            filename,
            favorite
          );

          delete payload._doc.password;
          returnData.message = "Success SignUp";
          returnData.status = 201;
          returnData.data = payload;
          res.status(201).json(returnData);
        } catch (error) {
          returnData.data = null;
          if (
            (error && error.name === "ValidationError") ||
            error.code === 11000
          ) {
            returnData.message =
              error.code === 11000 ? "Email Has Been Taken" : error.message;
            returnData.status = 422;
            returnData.fields = error.errors;
            res.status(422).json(returnData);
          } else {
            returnData.message = error.message;
            returnData.status = 422;
            returnData.fields = error.errors;
            res.status(422).json(returnData);
          }
        }
      });
    } else {
      payload = await addData(
        email,
        password,
        phoneNumber,
        username,
        name,
        null,
        favorite
      );

      delete payload._doc.password;
      returnData.message = "Success SignUp";
      returnData.status = 201;
      returnData.data = payload;
      res.status(201).json(returnData);
    }
  } catch (error) {
    returnData.data = null;
    if ((error && error.name === "ValidationError") || error.code === 11000) {
      returnData.message =
        error.code === 11000 ? "Email Has Been Taken" : error.message;
      returnData.status = 422;
      returnData.fields = error.errors;
      res.status(422).json(returnData);
    } else {
      returnData.message = error.message;
      returnData.status = 422;
      returnData.fields = error.errors;
      res.status(422).json(returnData);
    }
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isEmail = await checkEmail(email);

    if (isEmail) {
      const isSignIn = await signInModel(email, password);
      if (isSignIn) {
        const player = await getDataEmail(email);
        const token = jwt.sign(
          {
            player: {
              id: player._id,
              username: player.username,
              email: player.email,
              name: player.name,
              phoneNumber: player.phoneNumber,
              avatar: player.avatar,
            },
          },
          jwtKey
        );
        returnData.data = token;
        returnData.message = "Success SignIn";
        returnData.status = 200;
      } else {
        returnData.message = "Wrong Password";
        returnData.status = 403;
      }
    } else {
      returnData.message = "Cannot Find Email";
      returnData.status = 403;
    }

    res.status(returnData.status).json(returnData);
  } catch (error) {
    returnData.message = error.message ?? "Internal Server Error";
    returnData.status = 500;
    res.status(500).json(returnData);
  }
};

module.exports = { signUp, signIn };
