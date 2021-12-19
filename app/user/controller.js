const { getUser } = require("./model");
const bcrypt = require("bcryptjs");

const returnData = {
  alert: {
    message: null,
    status: null,
  },
  data: null,
  title: "Storegg Admin | ",
  url: "voucher",
};

const index = (req, res) => {
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };

  returnData.title = "Storegg Admin | Sign In";
  if (req.session.user === null || req.session.user === undefined) {
    res.render("admin/user/sign_in", returnData);
  } else {
    res.redirect("/dashboard");
  }
};

const actionLogin = async (req, res) => {
  const { email, password } = req.body;
  const { message, status, data: user } = await getUser(email);

  if (user) {
    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      req.session.user = {
        id: user._id,
        email: user.email,
        username: user.username,
        name: user.name,
        status: user.status,
      };
      res.redirect("/dashboard");
    } else {
      req.flash("aMessage", "Wrong Password");
      req.flash("aStatus", "danger");
      res.redirect("/");
    }
  } else {
    req.flash("aMessage", "Cannot find user with that email");
    req.flash("aStatus", "danger");
    res.redirect("/");
  }
};

const logout = async (req, res) => {
  req.session.user = null;
  res.redirect("/");
};

module.exports = { index, actionLogin, logout };
