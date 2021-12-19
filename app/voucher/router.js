const express = require("express");
const app = express.Router();
const {
  index,
  createView,
  actionCreate,
  actionUpdateStatus,
  editView,
  editAction,
  actionDelete,
} = require("./controller");
const os = require("os");
const multer = require("multer");
const upload = multer({ dest: os.tmpdir() });

app.get("/", index);
app.get("/create", createView);
app.post("/create", upload.single("thumbnail"), actionCreate);
app.put("/status/:id", actionUpdateStatus);
app.get("/:id", editView);
app.put("/:id", upload.single("thumbnail"), editAction);
app.delete("/:id", actionDelete);

module.exports = app;
