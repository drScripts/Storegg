const {
  getData,
  addData,
  getById,
  updateData,
  deleteData,
} = require("./model");

const returnData = {
  alert: {
    message: null,
    status: null,
  },
  data: null,
  title: "Storegg Admin | Bank",
  url: "bank",
};

const index = async (req, res) => {
  const { data } = await getData();
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };
  returnData.data = data;
  res.render("admin/bank", returnData);
};

const createView = async (req, res) => {
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };

  res.render("admin/bank/create", returnData);
};

const actionCreate = async (req, res) => {
  const { name, bankName, nRek } = req.body;

  const { message, status } = await addData(name, bankName, nRek);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  if (status === "success") {
    res.redirect("/bank");
  } else {
    res.redirect("/bank/create");
  }
};

const editView = async (req, res) => {
  const { id } = req.params;

  const { data } = await getById(id);

  returnData.data = data;
  console.log(returnData);
  res.render("admin/bank/edit", returnData);
};

const actionEdit = async (req, res) => {
  const { name, bankName, nRek } = req.body;
  const { id } = req.params;

  const { message, status } = await updateData(id, name, bankName, nRek);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  if (status === "success") {
    res.redirect("/bank");
  } else {
    res.redirect(`/bank/${id}`);
  }
};

const actionDelete = async (req, res) => {
  const { id } = req.params;

  const { message, status } = await deleteData(id);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  res.redirect("/bank");
};

module.exports = {
  index,
  createView,
  actionCreate,
  editView,
  actionEdit,
  actionDelete,
};
