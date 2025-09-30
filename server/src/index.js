// import connectDB from "../db/connectDB.js";
// import app from "./app.js";

// await connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running at Port : ${process.env.PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("MONGO db Connection failed !", error);
//   });

// index.js
import connectDB from "../db/connectDB.js";
import app from "./app.js";

await connectDB();
export default app; // no app.listen
