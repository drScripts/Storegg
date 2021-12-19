const isLoginAdmin = (req, res, next) => {
  if (req.session.user === null || req.session.user === undefined) {
    req.flash("aMessage", "Your Session is expired, please login again");
    req.flash("aStatus", "warning");
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = { isLoginAdmin };
