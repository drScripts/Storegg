const { getCount: countTransaction } = require("../transaction/model");
const { getCount: countProduct } = require("../voucher/model");
const { getCount: countUsers } = require("../player/model");

const dataReturner = {
  url: "index",
  title: "Storegg Admin | Dashboard",
  username: null,
  data: {},
};

const index = async (req, res) => {
  dataReturner.username = req.session.user.username;

  dataReturner.data = {
    userCount: await countUsers(),
    productCount: await countProduct(),
    transactionCount: await countTransaction(),
  };
  res.render("index", dataReturner);
};

module.exports = { index };
