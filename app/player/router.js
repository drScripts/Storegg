const express = require("express");
const app = express.Router();

const multer = require("multer");
const os = require("os");
const upload = multer({ dest: os.tmpdir() });

const {
  landingPage,
  detailPage,
  checkout,
  getDataHistory,
  detailHistory,
  dashboard,
  profile,
  updateProfile,
  getCategorydata,
} = require("./controller");
const { isAuthToken } = require("../middleware/auth");

app.get("/landingpage", landingPage);
app.get("/:id/detail", detailPage);
app.get("/category", getCategorydata);

app.post("/checkout", isAuthToken, checkout);
app.get("/history", isAuthToken, getDataHistory);
app.get("/history/:id", isAuthToken, detailHistory);
app.get("/dashboard", isAuthToken, dashboard);
app.get("/profile", isAuthToken, profile);
app.put("/profile", [isAuthToken, upload.single("avatar")], updateProfile);

module.exports = app;
