const mongoose = require("mongoose");

const dataReturn = {
  message: null,
  status: null,
};

const transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: {
        type: String,
        require: [true, "Game Name Should Be Filled"],
      },
      category: {
        type: String,
        require: [true, "Category Should Be Filled"],
      },
      thumbnail: {
        type: String,
      },
      coinName: {
        type: String,
        require: [true, "Coin Name Should Be Filled"],
      },
      coinQuantity: {
        type: String,
        require: [true, "Coin Quantity Should Be Filled"],
      },
      price: {
        type: Number,
        require: [true, "Price Should Be Filled"],
      },
    },
    historyPayment: {
      name: {
        type: String,
        require: [true, "Name Should Be Filled"],
      },
      type: {
        type: String,
        require: [true, "Type Should Be Filled"],
      },
      bankName: {
        type: String,
        require: [true, "Bank Name Should Be Filled"],
      },
      noRekening: {
        type: String,
        require: [true, "Nomor Rekening Should Be Filled"],
      },
    },
    name: {
      type: String,
      require: [true, "Name Should Be Filled"],
    },
    accountUser: {
      type: String,
      require: [true, "User Account Should Be Filled"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    historyUser: {
      name: {
        type: String,
        require: [true, "User Name Should Be Filled"],
      },
      phoneNumber: {
        type: String,
        require: [true, "Phone Number Should Be Filled"],
      },
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

const getData = async () => {
  try {
    dataReturn.data = await Transaction.find();
    dataReturn.message = "Success get data";
    dataReturn.status = "success";
  } catch (error) {
    dataReturn.message = error.message;
    dataReturn.status = "danger";
  }

  return dataReturn;
};

const updateStatus = async (id, status) => {
  try {
    await Transaction.updateOne(
      { _id: id },
      {
        status: status,
      }
    );
    dataReturn.message = "Success Update Status";
    dataReturn.status = "success";
  } catch (error) {
    dataReturn.message = error.message;
    dataReturn.status = "danger";
  }
  return dataReturn;
};

const getCount = async () => await Transaction.countDocuments();

const addData = async (payload) => await Transaction.create({ ...payload });

const getDataByStatus = async (status, id) =>
  status
    ? await Transaction.find({ status: status, player: id })
    : await Transaction.find({ player: id });

const getTotalTransaction = async (status, id) =>
  status
    ? await Transaction.aggregate([
        { $match: { status: status, player: id } },
        {
          $group: {
            _id: null,
            value: { $sum: "$value" },
          },
        },
      ])
    : await Transaction.aggregate([
        { $match: { player: id } },
        {
          $group: {
            _id: null,
            value: { $sum: "$value" },
          },
        },
      ]);

const getById = async (id) => await Transaction.findById(id);

const getDashboardTotal = async (id) =>
  await Transaction.aggregate([
    { $match: { player: id } },
    { $group: { _id: "$category", value: { $sum: "$value" } } },
  ]);

const getDashLatestTransaction = async (id) =>
  await Transaction.find({ player: id })
    .populate("category")
    .sort({ updatedAt: -1 });

module.exports = {
  getData,
  updateStatus,
  getCount,
  addData,
  getDataByStatus,
  getTotalTransaction,
  getById,
  getDashboardTotal,
  getDashLatestTransaction,
};