require("dotenv").config();

const path = require("path");

module.exports = {
  serviceName: process.env.SERVICE_NAME,
  dbUrl: process.env.MONGO_URL,
  mode: process.env.MODE,
  rootPath: path.resolve(__dirname, ".."),
  jwtKey: process.env.SECRET,
};
