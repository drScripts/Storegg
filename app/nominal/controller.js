const {
  getData,
  addData,
  deleteData,
  getById,
  updateData,
} = require("./model");

const returnData = {
  alert: {
    message: null,
    status: null,
  },
  data: null,
  title: "Storegg Admin | Nominal",
  url: "nominal",
};

const getNominal = async (req, res) => {
  returnData.alert.message = req.flash("aMessage");
  returnData.alert.status = req.flash("aStatus");

  returnData.data = await getData();

  res.render("admin/nominal", returnData);
};

const createView = async (req, res) => {
  returnData.alert.message = req.flash("aMessage");
  returnData.alert.status = req.flash("aStatus");

  res.render("admin/nominal/create", returnData);
};

const actionCreate = async (req, res) => {
  const { name, price, quantity } = req.body;

  const { message, status } = await addData(name.trim(), quantity, price);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  if (status === "success") {
    res.redirect("/nominal");
  } else {
    res.redirect("/nominal/create");
  }
};

const actionDelete = async (req, res) => {
  const { id } = req.params;

  const { message, status } = await deleteData(id);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  if (status === "success") {
    res.redirect("/nominal");
  } else {
    res.redirect("/nominal/create");
  }
};

const editView = async (req, res) => {
  const { id } = req.params;

  const { data } = await getById(id);
  returnData.data = data;

  res.render("admin/nominal/edit", returnData);
};

const editAction = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;

  const { message, status } = await updateData(
    id,
    name.trim(),
    price,
    quantity
  );

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  if (status === "success") {
    res.redirect("/nominal");
  } else {
    res.redirect("/nominal/edit");
  }
};

module.exports = {
  getNominal,
  createView,
  actionCreate,
  actionDelete,
  editView,
  editAction,
};
