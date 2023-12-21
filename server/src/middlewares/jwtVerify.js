const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = (req, res, next) => {
  try {
   
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Không tìm thấy token" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token đã hết hạn" });
        } else {
          return res.status(403).json({ message: "Token không hợp lệ" });
        }
      }
      if (data.role != 1) {
        return res
          .status(403)
          .json({ message: "Khong duoc cap quyen" });
      }
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { verifyToken };
