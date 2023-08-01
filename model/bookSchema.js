import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bookCategory",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    descriptuon: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
    },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
      required: true,
    },
  },
  { timestamps: true }
);

const book = mongoose.model("book", BookSchema);

export default book;
