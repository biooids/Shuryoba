import jwt from "jsonwebtoken";
import { errorHandler } from "./errorUtil.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorHandler(401, "Unauthorized access"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized access"));
    }

    req.user = user;

    next();
  });
};
