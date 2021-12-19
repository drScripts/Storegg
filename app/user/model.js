const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name harus diisi"],
  },
  email: {
    type: String,
    require: [true, "Email harus diisi"],
    unique: [true, "Email must be unique"],
  },
});
