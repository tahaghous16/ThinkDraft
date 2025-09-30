import jwt from "jsonwebtoken";

// Function to generate JWT token
export const generateToken = (payload) => {
  // Generate a new JWT token using user data
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 30000,
  });
};
