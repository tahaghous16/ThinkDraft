import fs from "fs";
import imagekit from "../utils/imagekit.js";
import Blog from "../models/blog.model.js";
import Comment from "../models/comment.model.js";
import main from "../utils/gemini.js";

// add blogs
export const addBlog = async (req, res, next) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );

    const imageFile = req.file;

    //Check if all field are present
    if (!title || !description || !category || !imageFile || !isPublished) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload Image to Imagekit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Optimization through Imagekit URL Transformation
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    const image = optimizedImageUrl;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({ success: true, message: "Blog added Successfully !" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get blogs
export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get individual blog
export const getBlogsById = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found!" });
    }

    res.json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// delete blogs
export const deleteBlogById = async (req, res, next) => {
  try {
    const { id } = req.body;

    // Try to delete
    const deletedBlog = await Blog.findByIdAndDelete(id);

    // If not found
    if (!deletedBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found!" });
    }

    res.json({ success: true, message: "Blog deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// published and unpublished blogs
export const togglePublish = async (req, res, next) => {
  try {
    const { id } = req.body;

    // Find blog by ID
    const blog = await Blog.findById(id);

    // If blog doesn't exist
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found!" });
    }

    // Toggle publish status
    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.json({ success: true, message: "Blog status updated!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// comments
export const addComment = async (req, res, next) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content });
    res.json({ success: true, message: "Comment added for review " });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllComments = async (req, res, next) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({
      createdAt: -1,
    });
    res.json({ success: true, comments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// generate content through ai

export const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;

    const content = await main(prompt);

    res.json({ success: true, content });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
