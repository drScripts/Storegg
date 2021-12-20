const {
  getLandingPageData: getVoucherData,
  getDataById: getDetailPageData,
  getCheckoutData,
} = require("../voucher/model");

const { getById: getNominalData } = require("../nominal/model");

const { getDataById: getPaymentData } = require("../payment/model");

const { getById: getBankData } = require("../bank/model");

const fs = require("fs");
const { rootPath } = require("../../config");

const {
  addData,
  getTotalTransaction,
  getDashboardTotal,
  getDataByStatus,
  getById: getHistoryDetail,
  getDashLatestTransaction,
} = require("../transaction/model");

const { getCategory } = require("../category/model");
const path = require("path");
const { updateData } = require("./model");

const dataReturn = {
  message: null,
  status: null,
  data: {},
};

const landingPage = async (req, res) => {
  try {
    const voucher = await getVoucherData();
    dataReturn.data = voucher;
    dataReturn.message = "Success Get Data!";
    dataReturn.status = 200;

    res.status(200).json(dataReturn);
  } catch (error) {
    dataReturn.message = error.message || "Internal Server Error";
    dataReturn.data = null;
    dataReturn.status = 500;
    res.status(500).json(dataReturn);
  }
};

const detailPage = async (req, res) => {
  try {
    const { id } = req.params;

    const voucher = await getDetailPageData(id);
    dataReturn.data = voucher ?? "Voucher tidak ditemukan";
    dataReturn.message = "Success Get Data!";
    dataReturn.status = 200;

    res.status(200).json(dataReturn);
  } catch (error) {
    dataReturn.message = error.message || "Internal Server Error";
    dataReturn.data = null;
    dataReturn.status = 500;
    res.status(500).json(dataReturn);
  }
};

const checkout = async (req, res) => {
  try {
    const { accountUser, name, nominals, vouchers, payments, banks } = req.body;

    const voucher = await getCheckoutData(vouchers);
    if (!voucher)
      res
        .status(404)
        .json({ message: "Cannot Find Product with That ID", status: 404 });

    const { data: nominal } = await getNominalData(nominals);
    if (!nominal)
      res
        .status(404)
        .json({ message: "Cannot Find Nominal with That ID", status: 404 });

    const { data: payment } = await getPaymentData(payments);

    if (!payment)
      res
        .status(404)
        .json({ message: "Cannot Find Payment with That ID", status: 404 });

    const { data: bank } = await getBankData(banks);
    if (!bank)
      res
        .status(404)
        .json({ message: "Cannot Find Bank with That ID", status: 404 });

    let tax = (10 / 100) * nominal._doc.price;
    let value = tax + nominal._doc.price;

    let payload = {
      historyVoucherTopup: {
        gameName: voucher._doc.name,
        category: voucher._doc.category?.name ?? "",
        thumbnail: voucher._doc.thumbnail,
        coinName: nominal._doc.coinName,
        coinQuantity: nominal._doc.coinQuantity,
        price: nominal._doc.price,
      },
      historyPayment: {
        name: bank._doc.name,
        type: payment._doc.type,
        bankName: bank._doc.bankName,
        noRekening: bank._doc.noRekening,
      },
      name: name,
      accountUser: accountUser,
      tax: tax,
      value: value,
      player: req.player._id,
      historyUser: {
        name: voucher._doc.user?.name,
        phoneNumber: voucher._doc.user?.phoneNumber,
      },
      category: voucher._doc.category?._id,
      user: voucher._doc.user?._id,
    };

    await addData(payload);

    dataReturn.data = payload;
    dataReturn.message = "Success Make Transaction";
    dataReturn.status = 201;

    res.status(dataReturn.status).json(dataReturn);
  } catch (error) {
    dataReturn.data = null;
    dataReturn.message = error.message || "Internal Server Error";
    dataReturn.status = 500;
    res.status(500).json(dataReturn);
  }
};

const getDataHistory = async (req, res) => {
  try {
    const { status } = req.query;
    const { _id: id } = req.player;

    dataReturn.data = await getDataByStatus(status, id);
    dataReturn.total = await getTotalTransaction(status, id);
    console.log(dataReturn);
    dataReturn.message = "Success get data history";
    dataReturn.status = 200;

    res.status(200).json(dataReturn);
  } catch (error) {
    dataReturn.data = null;
    dataReturn.message = error.message || "Internal Server Error";
    dataReturn.status = 500;
    res.status(500).json(dataReturn);
  }
};

const detailHistory = async (req, res) => {
  try {
    const { id } = req.params;

    const history = await getHistoryDetail(id);

    if (!history)
      res
        .status(404)
        .json({ message: "Cant Find History By That Id", status: 404 });

    dataReturn.message = "Success Get Data";
    dataReturn.status = 200;
    dataReturn.data = history;

    res.status(dataReturn.status).json(dataReturn);
  } catch (error) {
    dataReturn.data = null;
    dataReturn.message = error.message || "Internal Server Error";
    dataReturn.status = 500;
    res.status(500).json(dataReturn);
  }
};

const dashboard = async (req, res) => {
  try {
    const id = req.player._id;

    const count = await getDashboardTotal(id);
    const { data: category } = await getCategory();

    category.forEach((cat) => {
      count.forEach((element) => {
        if (cat._id.toString() === element._id.toString()) {
          element.name = cat.name;
        }
      });
    });

    const history = await getDashLatestTransaction(id);

    dataReturn.message = "Success Get Data";
    dataReturn.status = 200;
    dataReturn.data = {
      count: count,
      history: history,
    };

    res.status(dataReturn.data).json(dataReturn);
  } catch (error) {
    dataReturn.data = null;
    dataReturn.message = error.message || "Internal Server Error";
    dataReturn.status = 500;
    res.status(500).json(dataReturn);
  }
};

const profile = async (req, res) => {
  try {
    dataReturn.message = "Success Get Data";
    dataReturn.status = 200;
    dataReturn.data = req.player;

    delete dataReturn.data._doc.password;

    res.status(dataReturn.status).json(dataReturn);
  } catch (error) {
    dataReturn.data = null;
    dataReturn.message = error.message || "Internal Server Error";
    dataReturn.status = 500;
    res.status(500).json(dataReturn);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const { name, phoneNumber, email } = req.body;
    const { _id: id } = req.player;

    if (req.file) {
      const tempPath = req.file.path;
      const originalExt =
        req.file.originalname.split(".")[
          req.file.originalname.split(".").length - 1
        ];
      const filename = req.file.filename + "." + originalExt;
      const targetPath = path.resolve(rootPath, `public/users/${filename}`);

      const src = fs.createReadStream(tempPath);
      const dest = fs.createWriteStream(targetPath);
      src.pipe(dest);

      src.on("end", async () => {
        const player = await updateData(id, {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          avatar: filename,
        });
        dataReturn.message = "Success Update Profile";
        dataReturn.status = 201;
        res.status(201).json(dataReturn);
      });
    } else {
      const player = await updateData(id, {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      });

      dataReturn.message = "Success Update Profile";
      dataReturn.status = 201;
      res.status(201).json(dataReturn);
    }
  } catch (error) {
    dataReturn.data = null;
    dataReturn.message = error.message || "Internal Server Error";
    dataReturn.status = 500;
    res.status(500).json(dataReturn);
  }
};

module.exports = {
  landingPage,
  detailPage,
  checkout,
  getDataHistory,
  detailHistory,
  dashboard,
  profile,
  updateProfile,
};
