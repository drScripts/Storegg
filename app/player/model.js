const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const HASH_ROUND = 12;

const playerSchema = mongoose.Schema(
  {
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
      unique: true,
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
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);

const getCount = async () => await Player.countDocuments();

const addData = async (
  email,
  password,
  phoneNumber,
  username,
  name,
  avatar,
  favorite
) => {
  const hashedPassword = bcrypt.hashSync(password, HASH_ROUND);
  const insert = await Player.create({
    email: email,
    password: hashedPassword,
    phoneNumber: phoneNumber,
    username: username,
    name: name,
    avatar: avatar,
    favorite: favorite,
  });
  return insert;
};

const checkEmail = async (email) => {
  const count = await Player.findOne({ email: email }).countDocuments();
  return count > 0;
};

const signIn = async (email, password) => {
  const player = await Player.findOne({ email: email });

  return bcrypt.compareSync(password, player.password);
};

const getDataEmail = async (email) => await Player.findOne({ email: email });

const getDataById = async (id) => await Player.findById(id);

const updateData = async (id, data) =>
  await Player.updateOne({ _id: id }, { ...data });

module.exports = {
  getCount,
  addData,
  checkEmail,
  signIn,
  getDataEmail,
  getDataById,
  updateData,
};
