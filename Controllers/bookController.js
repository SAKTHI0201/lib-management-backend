import { badRequest } from "../error/index.js";
import { StatusCodes } from "http-status-codes";
import book from "../model/bookSchema.js";

const getallbooks = async (req, res, next) => {
  try {
    const Book = await book.find();
    if (!Book) throw badRequest("No books found");
    res.status(StatusCodes.OK).json(Book);
  } catch (error) {
    next(error);
  }
};
const getbooks = async (req, res, next) => {
  //   console.log(req.params.id);
  try {
    const Book = await book.find({ category: req.params.id });
    if (!Book) throw badRequest("No books found");
    res.status(StatusCodes.OK).json({ Book });
  } catch (error) {
    next(error);
  }
};
const addbook = async (req, res, next) => {
  try {
    // id = category id
    req.body.category = req.params.id;
    const Book = await book.create(req.body);
    if (!Book) throw badRequest("No books found");
    res.status(StatusCodes.OK).json({ message: "Get all books" });
  } catch (error) {
    next(error);
  }
};
const updatebook = async (req, res, next) => {
  try {
    const Book = await book.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!Book) throw badRequest("No books found");
    res.status(StatusCodes.OK).json({ message: "Get all books" });
  } catch (error) {
    next(error);
  }
};
const deletebook = async (req, res, next) => {
  try {
    const Book = await book.findByIdAndDelete({ _id: req.params.id });
    if (!Book) throw badRequest("No books found");
    res.status(StatusCodes.OK).json({ message: "Get all books" });
  } catch (error) {
    next(error);
  }
};

export { getallbooks, getbooks, addbook, updatebook, deletebook };
