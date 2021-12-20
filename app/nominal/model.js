const mongoose = require("mongoose");

const returnData = {
  message: null,
  status: null,
};

let nominalScheme = mongoose.Schema(
  {
    coinQuantity: {
      type: Number,
      default: 0,
    },
    coinName: {
      type: String,
      require: [true, "Nama coin harus diisi"],
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Nominal = mongoose.model("Nominal", nominalScheme);

const getData = async () => {
  const data = await Nominal.find();
  return data;
};

const addData = async (name, quantity, price) => {
  try {
    await Nominal.create({
      coinName: name,
      coinQuantity: quantity,
      price: price,
    });

    returnData.message = "Success Add Nominal !";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }
  return returnData;
};

const deleteData = async (id) => {
  try {
    await Nominal.deleteOne({ _id: id });

    returnData.message = "Success Delete Nominal !";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const getById = async (id) => {
  try {
    returnData.data = await Nominal.findOne({ _id: id });
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const updateData = async (id, name, price, quantity) => {
  try {
    await Nominal.updateOne(
      { _id: id },
      { coinQuantity: quantity, coinName: name, price: price }
    );

    returnData.message = "Success Update Data !";
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
  deleteData,
  getById,
  updateData,
};
