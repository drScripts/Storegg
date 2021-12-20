const express = require("express");
const app = express.Router();
const { isLoginAdmin } = require("../middleware/auth");
const { index, updateStatus } = require("./controller");

app.use(isLoginAdmin);
app.get("/", index);
app.put("/status/:id", updateStatus);

module.exports = app;
