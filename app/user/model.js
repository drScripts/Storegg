const mongoose = require("mongoose");

const returnData = {
  message: null,
  status: null,
};

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name harus diisi"],
    },
    username: {
      type: String,
      require: [true, "Username must be filled"],
    },
    email: {
      type: String,
      require: [true, "Email harus diisi"],
      unique: [true, "Email must be unique"],
    },
    password: {
      type: String,
      require: [true, "Password harus diisi"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    phoneNumber: {
      type: String,
      require: [true, "Phone Number must be filled"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const getUser = async (email) => {
  try {
    returnData.data = await User.findOne({ email: email });
    returnData.message = "Success Get User";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }
  return returnData;
};

const getCount = async () => await User.countDocuments();

module.exports = { getUser, getCount };
