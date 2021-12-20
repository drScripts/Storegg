const express = require("express");
const app = express.Router();

const { signUp, signIn } = require("./controller");

const os = require("os");
const multer = require("multer");
const upload = multer({ dest: os.tmpdir() });

app.post("/signup", upload.single("avatar"), signUp);
app.post("/signin", signIn);

module.exports = app;
