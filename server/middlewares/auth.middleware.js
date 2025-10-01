import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ success: false, message: "Invalid Token" });

  // split "Bearer token"
  const token = authHeader.split(" ")[1] || authHeader;

  try {
    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default auth;
