import { generateToken } from "../helper/helper.js";

import Comment from "../models/comment.model.js";
import Blog from "../models/blog.model.js";

// admin login
export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    )
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials" });

    const token = generateToken({ email: email });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get Admin all Blogs
export const getAllBlogsAdmin = async (req, res, next) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// All Comments
export const getAllComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({})
      .populate("blog")
      .sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: true, message: error.message });
  }
};

// Dashboard
export const getDashboard = async (req, res, next) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments();
    const comments = await Comment.countDocuments();
    const drafts = await Blog.countDocuments({ isPublished: false });
    const dashboardData = {
      recentBlogs,
      blogs,
      comments,
      drafts,
    };
    res.json({ success: true, dashboardData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// delete comments
export const deleteCommentByID = async (req, res, next) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);

    //Delete all comments associated with the blog

    await Comment.deleteMany({ blog: id });

    res.json({ success: true, message: "Comment deleted Successfully" });
  } catch (error) {
    res.json({ success: true, message: error.message });
  }
};

// Approve Comments
export const approveCommentByID = async (req, res, next) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndUpdate(id, { isApproved: true });
    res.json({ success: true, message: "Comment approved Successfully" });
  } catch (error) {
    res.json({ success: true, message: error.message });
  }
};
