import express from "express";
import cors from "cors";
import adminRouter from "../routes/admin.route.js";
import blogRouter from "../routes/blogs.route.js";

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Working");
});

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

export default app;
