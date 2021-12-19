const {
  addCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("./model");

const dataReturner = {
  url: "category",
  title: "Storegg Admin | Category",
  username: null,
};

const category = async (req, res) => {
  let categories = await getCategory();

  dataReturner.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };
  dataReturner.data = categories.data;
  dataReturner.username = req.session.user.username;
  res.render("admin/category", dataReturner);
};

const createView = (req, res) => {
  dataReturner.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };
  dataReturner.username = req.session.user.username;
  res.render("admin/category/create", dataReturner);
};

const actionCreate = async (req, res) => {
  const { name } = req.body;

  const errMessage = await addCategory(name);
  req.flash("aMessage", errMessage.message);
  req.flash("aStatus", errMessage.status);
  if (errMessage.status === "success") {
    res.redirect("/category");
  } else {
    res.redirect("/category/create");
  }
};

const editView = async (req, res) => {
  const id = req.params.id;
  const data = await getSingleCategory(id);
  dataReturner.data = data;
  console.log(dataReturner);
  dataReturner.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };
  dataReturner.username = req.session.user.username;
  res.render("admin/category/edit", dataReturner);
};

const putAction = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const message = await updateCategory(id, name);

  req.flash("aMessage", message.message);
  req.flash("aStatus", message.status);

  if (message.status === "success") {
    res.redirect("/category");
  } else {
    res.redirect("/category/edit");
  }
};

const deleteAction = async (req, res) => {
  const id = req.params.id;

  const message = await deleteCategory(id);
  req.flash("aMessage", message.message);
  req.flash("aStatus", message.status);

  res.redirect("/category");
};

module.exports = {
  category,
  createView,
  actionCreate,
  editView,
  putAction,
  deleteAction,
};
