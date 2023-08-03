import Express from "express";
import {
  getalltransactions,
  addtransaction,
  deletetransaction,
} from "../Controllers/transactionController.js";
import { verifyUser } from "../Middleware/Verify-User.js";
import authVerify from "../Middleware/auth-verify.js";

const transactionrouter = Express.Router();

transactionrouter
  .route("/:id")
  .get(authVerify, verifyUser("admin", "user"), getalltransactions);
transactionrouter
  .route("/:id/:category/:book")
  .post(authVerify, verifyUser("admin", "user"), addtransaction)
  .delete(authVerify, verifyUser("admin", "user"), deletetransaction);

export default transactionrouter;
