import express from "express";
import {
  adminLogin,
  approveCommentByID,
  deleteCommentByID,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
} from "../controllers/admin.controller.js";
import auth from "../middlewares/auth.middleware.js";
const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.post("/delete-comment", auth, deleteCommentByID);
adminRouter.post("/approve-comment", auth, approveCommentByID);
adminRouter.get("/blogs", auth, getAllBlogsAdmin);
adminRouter.get("/dashboard", auth, getDashboard);
adminRouter.get("/comments", auth, getAllComments);

export default adminRouter;
