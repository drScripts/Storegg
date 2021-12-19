const mongoose = require("mongoose");

const returnData = {
  message: null,
  status: null,
};

let voucherShcema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama game harus diisi"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    thumbnail: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    nominals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nominal",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Voucher = mongoose.model("Voucher", voucherShcema);

const getData = async () => {
  return await Voucher.find().populate("category").populate("nominals");
};

const addData = async (name, thumbnail, category, nominals) => {
  try {
    await Voucher.create({
      name: name,
      thumbnail: thumbnail,
      category: category,
      nominals: nominals,
    });

    returnData.message = "Success add voucher!";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const updateStatus = async (id, status) => {
  try {
    await Voucher.updateOne(
      { _id: id },
      { status: status === "Y" ? "N" : "Y" }
    );

    returnData.message = "Success Update Status";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const getDataById = async (id) => {
  return await Voucher.findById(id).populate("category").populate("nominals");
};

const updateData = async (id, name, thumbnail, category, nominals) => {
  try {
    await Voucher.updateOne(
      { _id: id },
      {
        name: name,
        thumbnail: thumbnail,
        category: category,
        nominals: nominals,
      }
    );

    returnData.message = "Success Update Data";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const deleteData = async (id) => {
  try {
    await Voucher.deleteOne({ _id: id });
    returnData.message = "Success Delete Data";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

module.exports = {
  getData,
  addData,
  updateStatus,
  getDataById,
  updateData,
  deleteData,
};
