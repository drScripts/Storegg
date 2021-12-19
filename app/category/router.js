var express = require("express");
var router = express.Router();
const {
  category,
  createView,
  actionCreate,
  editView,
  putAction,
  deleteAction,
} = require("./controller");
const { isLoginAdmin } = require("../middleware/auth");

router.use(isLoginAdmin);
router.get("/", category);

router.get("/create", createView);
router.post("/create", actionCreate);
router.get("/:id", editView);
router.put("/:id", putAction);
router.delete("/:id", deleteAction);

module.exports = router;
