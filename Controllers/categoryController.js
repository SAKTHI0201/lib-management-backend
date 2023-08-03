import category from "../model/bookCategorySchema.js";
import { badRequest } from "../error/index.js";
import { StatusCodes } from "http-status-codes";

const getAllCategory = async (req, res, next) => {
  try {
    let query = {};
    if (req.query.name) query = { name: req.query.name };
    const bookCategory = await category.find(query);
    if (!bookCategory) throw new badRequest("No category found");
    res.status(StatusCodes.OK).json({ bookCategory });
  } catch (error) {
    next(error);
  }
};
const createCategory = async (req, res, next) => {
  try {
    const bookCategory = await category.create(req.body);
    if (!bookCategory) throw new badRequest("No category found");
    res.status(StatusCodes.OK).json({ bookCategory });
  } catch (error) {
    next(error);
  }
};
const updateCategory = async (req, res, next) => {
  try {
    const bookCategory = await category.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!bookCategory) throw new badRequest("No category found");
    res.status(StatusCodes.OK).json({ message: "Update category" });
  } catch (error) {
    next(error);
  }
};
const deleteCategory = async (req, res, next) => {
  try {
    const bookCategory = await category.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!bookCategory) throw new badRequest("No category found");
    res.status(StatusCodes.OK).json({ message: "Delete category" });
  } catch (error) {
    next(error);
  }
};

export { getAllCategory, createCategory, updateCategory, deleteCategory };
