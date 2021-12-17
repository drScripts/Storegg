const dataReturner = {
  url: "index",
  title: "Storegg Admin | Dashboard",
};

const index = (req, res) => {
  res.render("index", dataReturner);
};

module.exports = { index };
