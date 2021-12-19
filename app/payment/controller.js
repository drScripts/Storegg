const {
  getData,
  addData,
  updateStatus,
  getDataById,
  updateData,
  deleteData,
} = require("./model");
const { getData: getBankData } = require("../bank/model");

const returnData = {
  alert: {
    message: null,
    status: null,
  },
  data: null,
  title: "Storegg Admin | Payment",
  url: "payment",
};

const index = async (req, res) => {
  const { data } = await getData();
  returnData.data = data;
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };

  res.render("admin/payment", returnData);
};

const createView = async (req, res) => {
  const { data } = await getBankData();
  returnData.banks = data;
  console.log(returnData);
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };

  res.render("admin/payment/create", returnData);
};

const actionCreate = async (req, res) => {
  const { type, banks } = req.body;
  const { message, status } = await addData(type, banks);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  if (status === "success") {
    res.redirect("/payment");
  } else {
    res.redirect("/payment/create");
  }
};

const actionUpdateStatus = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const { message, status } = await updateStatus(id, data);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  res.redirect("/payment");
};

const editView = async (req, res) => {
  const { id } = req.params;
  const { data } = await getDataById(id);
  const { data: dataBank } = await getBankData();
  returnData.data = data;
  returnData.banks = dataBank;
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };
  res.render("admin/payment/edit", returnData);
};

const editAction = async (req, res) => {
  const { id } = req.params;
  const { type, banks } = req.body;

  const { message, status } = await updateData(id, type, banks);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  if (status === "success") {
    res.redirect("/payment");
  } else {
    res.redirect(`/payment/${id}`);
  }
};

const deleteAction = async (req, res) => {
  const { id } = req.params;

  const { message, status } = await deleteData(id);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  res.redirect("/payment");
};

module.exports = {
  index,
  createView,
  actionCreate,
  actionUpdateStatus,
  editView,
  editAction,
  deleteAction,
};
