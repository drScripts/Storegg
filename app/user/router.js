const express = require("express");
const app = express.Router();

const { index, actionLogin } = require("./controller");

app.get("/", index);
app.post("/", actionLogin);

module.exports = app;
