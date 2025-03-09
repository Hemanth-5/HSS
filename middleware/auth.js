import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(400).json({ message: "Invalid authentication" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(400).json({ message: "Session expired. Please login again" });
    } else {
      res.status(400).json({ message: "Invalid authentication" });
    }
  }
};
