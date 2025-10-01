import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import adminRouter from "./routes/admin.route.js";
import blogRouter from "./routes/blogs.route.js";

//connet mongoDB

await connectDB();
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is Working");
});

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running at Port : ${PORT}`);
});

export default app;
