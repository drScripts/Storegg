const dataReturner = {
  url: "index",
  title: "Storegg Admin | Dashboard",
};

const index = (req, res, next) => {
  const alertMessage = req.flash("alertMessage");
  const alertStatus = req.flash("alertStatus");

  const alert = {
    message: alertMessage,
    status: alertStatus,
  };
  dataReturner += alert;
  res.render("index", dataReturner);
};

module.exports = { index };
