const { getData, updateStatus: statusUpdateAction } = require("./model");

const returnData = {
  alert: {
    message: null,
    status: null,
  },
  data: null,
  title: "Storegg Admin | Transaction",
  url: "transaction",
  username: null,
};

const index = async (req, res) => {
  returnData.username = req.session?.user?.username ?? "User User";

  const { data } = await getData();

  returnData.data = data;
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };

  res.render("admin/transaction", returnData);
};

const updateStatus = async (req, res) => {
  const { status: statusData } = req.body;
  const { id } = req.params;

  const { message, status } = await statusUpdateAction(id, statusData);

  req.flash("aMessage", message);
  req.flash("aStatus", status);

  res.redirect("/transaction");
};

module.exports = { index, updateStatus };
