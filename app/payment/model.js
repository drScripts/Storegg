const mongoose = require("mongoose");

const returnData = {
  message: null,
  status: null,
};

const paymentSchema = mongoose.Schema(
  {
    type: {
      type: "String",
      require: [true, "Payment Type Required"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    banks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
      },
    ],
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

const getData = async () => {
  try {
    returnData.data = await Payment.find().populate("banks");
    returnData.message = "Success Get Data ";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const addData = async (type, banks) => {
  try {
    await Payment.create({
      type: type,
      banks: banks,
    });
    returnData.message = "Success Add Data ";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const updateStatus = async (id, status) => {
  try {
    await Payment.updateOne(
      { _id: id },
      {
        status: status === "Y" ? "N" : "Y",
      }
    );

    returnData.message = "Success Update Status ";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }
  return returnData;
};

const getDataById = async (id) => {
  try {
    returnData.data = await Payment.findById(id).populate("banks");
    returnData.message = "Success Get Data";
    returnData.status = "success";
  } catch (error) {
    returnData.message = error.message;
    returnData.status = "danger";
  }

  return returnData;
};

const updateData = async (id, type, banks) => {
  try {
    await Payment.updateOne(
      { _id: id },
      {
        type: type,
        banks: banks,
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
    await Payment.deleteOne({ _id: id });

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
