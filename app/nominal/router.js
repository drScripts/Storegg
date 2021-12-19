const express = require("express");
const app = express.Router();

const {
  getNominal,
  createView,
  actionCreate,
  actionDelete,
  editView,
  editAction,
} = require("./controller");
const { isLoginAdmin } = require("../middleware/auth");

app.use(isLoginAdmin);
app.get("/", getNominal);
app.get("/create", createView);
app.post("/create", actionCreate);
app.get("/:id", editView);
app.put("/:id", editAction);
app.delete("/:id", actionDelete);
module.exports = app;
