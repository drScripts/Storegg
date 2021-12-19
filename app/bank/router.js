const express = require("express");
const {
  index,
  createView,
  actionCreate,
  editView,
  actionEdit,
  actionDelete,
} = require("./controller");
const app = express.Router();
const { isLoginAdmin } = require("../middleware/auth");

app.use(isLoginAdmin);
app.get("/", index);
app.get("/create", createView);
app.post("/create", actionCreate);
app.get("/:id", editView);
app.put("/:id", actionEdit);
app.delete("/:id", actionDelete);

module.exports = app;
