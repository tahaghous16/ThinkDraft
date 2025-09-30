import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler.js";
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next(errorHandler(401, "Token Not Found"));

  // split "Bearer token"
  const token = authHeader.split(" ")[1] || authHeader;

  try {
    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    next(401, "Invalid Token");
  }
};

export default auth;
