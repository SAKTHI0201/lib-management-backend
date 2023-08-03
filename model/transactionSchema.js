import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authUser",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bookCategory",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
    required: true,
  },
});

const transaction = mongoose.model("transactios", transactionSchema);

export default transaction;
