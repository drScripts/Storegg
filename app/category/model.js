const mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: [true, "Category name is required"],
  },
});

const Category = mongoose.model("Category", categorySchema);

const dataReturn = {
  message: null,
  status: null,
};

const addCategory = async (name) => {
  try {
    await Category.create({ name: name });
    dataReturn.message = "Success Add Category ! ";
    dataReturn.status = "success";
  } catch (error) {
    dataReturn.message = error.message;
    dataReturn.status = "danger";
  }

  return dataReturn;
};

const getCategory = async () => {
  try {
    dataReturn.data = await Category.find();
  } catch (error) {
    dataReturn.message = error.message;
    dataReturn.status = "danger";
  }

  return dataReturn;
};

const getSingleCategory = async (id) => {
  try {
    return await Category.findById(id);
  } catch (error) {
    console.error("Error db : ", error);
  }
};

const updateCategory = async (id, name) => {
  try {
    await Category.updateOne({ _id: id }, { name });

    dataReturn.message = "Success Edit Data !";
    dataReturn.status = "success";
  } catch (error) {
    dataReturn.message = error.message;
    dataReturn.status = "danger";
  }
  return dataReturn;
};

const deleteCategory = async (id) => {
  try {
    dataReturn.message = "Success Remove Data !";
    dataReturn.status = "success";
    await Category.deleteOne({ _id: id });
  } catch (error) {
    dataReturn.message = error.message;
    dataReturn.status = "danger";
  }
  return dataReturn;
};

module.exports = {
  addCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
