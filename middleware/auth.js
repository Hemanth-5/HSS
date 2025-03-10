import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  try {
    const accesstoken = req.headers.authorization.split(" ")[1];

    if (!accesstoken) {
      res.status(400).json({ message: "Invalid authentication" });
    }
    const hssToken = req.headers.hss;
    if (!hssToken) {
      res.status(400).json({ message: "Invalid  HSS authentication" });
    }

    const decoded = jwt.verify(accesstoken, process.env.JWT_SECRET);
    req.user = decoded;
    req.hss = hssToken;
    console.log("User authenticated:", decoded);
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(400).json({ message: "Session expired. Please login again" });
    } else {
      res.status(400).json({ message: "Invalid authentication" });
    }
  }
};
