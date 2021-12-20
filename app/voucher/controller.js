const {
  getData,
  addData,
  updateStatus,
  getDataById,
  updateData,
  deleteData,
} = require("./model");
const { getCategory } = require("../category/model");
const path = require("path");
const fs = require("fs");
const config = require("../../config");

const { getData: getDataNominal } = require("../nominal/model");

const returnData = {
  alert: {
    message: null,
    status: null,
  },
  data: null,
  title: "Storegg Admin | Voucher",
  url: "voucher",
  username: null,
};

const index = async (req, res) => {
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };

  returnData.data = await getData();
  returnData.username = req.session.user.username;
  res.render("admin/voucher", returnData);
};

const createView = async (req, res) => {
  returnData.alert = {
    message: req.flash("aMessage"),
    status: req.flash("aStatus"),
  };

  const { data: dataCategory } = await getCategory();

  const dataNominal = await getDataNominal();

  returnData.data = {
    category: dataCategory,
    nominal: dataNominal,
  };

  returnData.username = req.session.user.username;
  res.render("admin/voucher/create", returnData);
};

const actionCreate = async (req, res) => {
  const { name, category, nominals } = req.body;

  if (req.file) {
    let temp_path = req.file.path;
    let originExt =
      req.file.originalname.split(".")[
        req.file.originalname.split(".").length - 1
      ];
    let filename = req.file.filename + "." + originExt;
    let target_path = path.resolve(
      config.rootPath,
      `public/uploads/${filename}`
    );

    let src = fs.createReadStream(temp_path);
    const dest = fs.createWriteStream(target_path);
    src.pipe(dest);

    src.on("end", async () => {
      const { message, status } = await addData(
        name,
        filename,
        category,
        nominals
      );

      req.flash("aMessage", message);
      req.flash("aStatus", status);

      if (status === "success") {
        res.redirect("/voucher");
      } else {
        res.redirect("/voucher/create");
      }
    });
  } else {
    const { message, status } = await addData(name, "", category, nominals);

    req.flash("aMessage", message);
    req.flash("aStatus", status);

    if (status === "success") {
      res.redirect("/voucher");
    } else {
      res.redirect("/voucher/create");
    }
  }
};

const actionUpdateStatus = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const { message, status } = await updateStatus(id, data);
  req.flash("aMessage", message);
  req.flash("aStatus", status);
  res.redirect("/voucher");
};

const editView = async (req, res) => {
  const { id } = req.params;

  const data = await getDataById(id);

  returnData.data = data;
  returnData.categorys = await getCategory();
  returnData.nominal = await getDataNominal();
  returnData.username = req.session.user.username;
  res.render("admin/voucher/edit", returnData);
};

const editAction = async (req, res) => {
  const { id } = req.params;
  const { name, category, nominals } = req.body;

  if (req.file) {
    let temp_path = req.file.path;
    let originExt =
      req.file.originalname.split(".")[
        req.file.originalname.split(".").length - 1
      ];
    let filename = req.file.filename + "." + originExt;
    let target_path = path.resolve(
      config.rootPath,
      `public/uploads/${filename}`
    );

    let src = fs.createReadStream(temp_path);
    const dest = fs.createWriteStream(target_path);
    src.pipe(dest);

    src.on("end", async () => {
      const { message, status } = await updateData(
        id,
        name,
        filename,
        category,
        nominals
      );

      req.flash("aMessage", message);
      req.flash("aStatus", status);

      if (status === "success") {
        res.redirect("/voucher");
      } else {
        res.redirect("/voucher/create");
      }
    });
  } else {
    const { message, status } = await updateData(
      id,
      name,
      "",
      category,
      nominals
    );

    req.flash("aMessage", message);
    req.flash("aStatus", status);

    if (status === "success") {
      res.redirect("/voucher");
    } else {
      res.redirect("/voucher/create");
    }
  }
};

const actionDelete = async (req, res) => {
  const { id } = req.params;

  const { message, status } = await deleteData(id);
  req.flash("aStatus", status);

  res.redirect("/voucher");
};

module.exports = {
  index,
  createView,
  actionCreate,
  actionUpdateStatus,
  editView,
  editAction,
  actionDelete,
};
