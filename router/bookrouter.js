import Express from "express";
import {
  getallbooks,
  getbooks,
  addbook,
  updatebook,
  deletebook,
} from "../Controllers/bookController.js";
import { verifyUser } from "../Middleware/Verify-User.js";
import authVerify from "../Middleware/auth-verify.js";

const bookrouter = Express.Router();

bookrouter.route("/").get(getallbooks);

bookrouter
  .route("/:id/:category")
  .post(authVerify, verifyUser("admin"), addbook);
bookrouter
  .route("/:id/:bookid")
  .get(authVerify, verifyUser("admin"), getbooks)
  .patch(authVerify, verifyUser("admin"), updatebook)
  .delete(authVerify, verifyUser("admin"), deletebook);

export default bookrouter;
