import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import adminRouter from "./routes/admin.route.js";
import blogRouter from "./routes/blogs.route.js";

await connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Working");
});

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// ❌ REMOVE app.listen() for vercel

export default app;
