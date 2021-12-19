const express = require("express");
const app = express.Router();

const {
  index,
  createView,
  actionCreate,
  actionUpdateStatus,
  editView,
  editAction,
  deleteAction,
} = require("./controller");

app.get("/", index);
app.get("/create", createView);
app.post("/create", actionCreate);
app.put("/status/:id", actionUpdateStatus);
app.get("/:id", editView);
app.put("/:id", editAction);
app.delete("/:id", deleteAction);

module.exports = app;
