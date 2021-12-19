const mongoose = require("mongoose");

const returnData = {
  message: null,
  status: null,
};

const bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Banker Name must be filled"],
    },
    bankName: {
      type: String,
      require: [true, "Bank Name must be filled"],
    },
    nomorRek: {
      type: String,
      require: [true, "Rek Number must be filled"],
    },
  },
  { timestamps: true }
);

const Bank = mongoose.model("Bank", bankSchema);

const getData = async () => {
  try {
    returnData.data = await Bank.find();
    returnData.message = "Success get data";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const addData = async (name, bankName, nRek) => {
  try {
    await Bank.create({
      name: name,
      bankName: bankName,
      nomorRek: nRek,
    });

    returnData.message = "Success Add Data";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }
  return returnData;
};

const getById = async (id) => {
  try {
    returnData.data = await Bank.findById(id);
    returnData.message = "Success Get Data";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }
  return returnData;
};

const updateData = async (id, name, bankName, nRek) => {
  try {
    await Bank.updateOne(
      { _id: id },
      {
        name: name,
        bankName: bankName,
        nomorRek: nRek,
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
    await Bank.deleteOne({ _id: id });

    returnData.message = "Success Delete Data";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }
  return returnData;
};

module.exports = { getData, addData, getById, updateData, deleteData };
