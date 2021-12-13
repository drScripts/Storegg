const mongoose = require("mongoose");
const { dbUrl } = require("../config/index");

mongoose.connect(dbUrl);

const db = mongoose.connection;

module.exports = db;
