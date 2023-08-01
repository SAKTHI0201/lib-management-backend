import express from "express";
import {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../Controllers/categoryController.js";
import { verifyUser } from "../Middleware/Verify-User.js";
import authVerify from "../Middleware/auth-verify.js";

const categoryrouter = express.Router();

categoryrouter.route("/").get(getAllCategory);

categoryrouter
  .route("/:id")
  .post(authVerify, verifyUser("admin"), createCategory)
  .patch(authVerify, verifyUser("admin"), updateCategory)
  .delete(authVerify, verifyUser("admin"), deleteCategory);

export default categoryrouter;
