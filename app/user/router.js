const express = require("express");
const app = express.Router();

const { index, actionLogin, logout } = require("./controller");

app.get("/", index);
app.post("/", actionLogin);
app.get("/logout", logout);

module.exports = app;
