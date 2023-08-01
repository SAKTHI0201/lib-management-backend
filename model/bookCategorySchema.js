import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

const bookCategory = mongoose.model("bookCategory", CategorySchema);

export default bookCategory;
