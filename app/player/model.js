const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  role: {
    type: String,
    enum: ["user"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["Y", "N"],
    default: "Y",
  },
  email: {
    type: String,
    require: [true, "Email must be filled"],
  },
  password: {
    type: String,
    require: [true, "Password must be filled"],
  },
  phoneNumber: {
    type: String,
    require: [true, "Phone Number must be filled"],
  },
  username: {
    type: String,
    require: [true, "Username must be filled"],
  },
  name: {
    type: String,
    require: [true, "Full name must be filled"],
  },
  avatar: {
    type: String,
  },
  favorite: [
    {
      type: String,
      ref: "Category",
    },
  ],
});

const Player = mongoose.model("Player", playerSchema);

const getCount = async () => await Player.countDocuments();

module.exports = { getCount };
