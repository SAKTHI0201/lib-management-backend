import badRequest from "../error/badRequest.js";
import transaction from "../model/transactionSchema.js";
import book from "../model/bookSchema.js";

const getalltransactions = async (req, res, next) => {
  // /:id
  var books = [];
  try {
    const transactions = await transaction.find({ user: req.params.id });
    if (!transactions) throw badRequest("No transactions");
    for (let i in transactions) {
      const bookDetails = await book.findById(transactions[i].book);
      if (!bookDetails) throw badRequest("No book");
      books.push(bookDetails);
    }
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
const addtransaction = async (req, res, next) => {
  // /:id/:category/:book
  req.body.user = req.params.id;
  req.body.book = req.params.book;
  req.body.category = req.params.category;
  try {
    const addbook = await transaction.create(req.body);
    const updatebook = await book.findByIdAndUpdate(
      req.params.book,
      {
        status: "unavailable",
      },
      { new: true }
    );
    if (!addbook || !updatebook) throw badRequest("No transactions");
    res.status(200).json({ success: true, message: "Get all transactions" });
  } catch (error) {
    next(error);
  }
};
const deletetransaction = async (req, res, next) => {
  // /:id/:category/:book
  req.body.user = req.params.id;
  req.body.book = req.params.book;
  req.body.category = req.params.category;
  try {
    const addbook = await transaction.findOneAndDelete(req.body);
    const updatebook = await book.findByIdAndUpdate(
      req.params.book,
      {
        status: "available",
      },
      { new: true }
    );
    if (!addbook || !updatebook) throw badRequest("No transactions");
    res.status(200).json({ success: true, message: "Get all transactions" });
  } catch (error) {
    next(error);
  }
};

export { getalltransactions, addtransaction, deletetransaction };
