const { getDataById } = require("../player/model");
const { jwtKey } = require("../../config");
const jwt = require("jsonwebtoken");

const isLoginAdmin = (req, res, next) => {
  if (req.session.user === null || req.session.user === undefined) {
    req.flash("aMessage", "Your Session is expired, please login again");
    req.flash("aStatus", "warning");
    res.redirect("/");
  } else {
    next();
  }
};

const isAuthToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", "")
      : null;

    const data = jwt.verify(token, jwtKey);

    const player = await getDataById(data.player.id);

    if (!player) throw new Error("Player Not Find");

    req.player = player;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({ message: "Not Authorized", status: 401 });
  }
};

module.exports = { isLoginAdmin, isAuthToken };
