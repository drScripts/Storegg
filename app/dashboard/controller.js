const dataReturner = {
  url: "index",
  title: "Storegg Admin | Dashboard",
  username: null,
};

const index = (req, res) => {
  dataReturner.username = req.session.user.username;
  res.render("index", dataReturner);
};

module.exports = { index };
