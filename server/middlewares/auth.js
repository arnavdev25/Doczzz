const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async function (req, res, next) {
  try {
    const { authorization } = req.headers;
    if (authentication) {
      const token = authorization.replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ _id: decoded._id });

      if (!user) {
        res.status(401).json({ msg: "You are not logged in" });
      } else {
        req.user = user;
        next();
      }
    } else {
      res.status(401).json({ msg: "You are not logged in" });
    }
  } catch (err) {
    res.status(401).json({
      msg: "You are not authorized to access this route",
      error: err.message,
    });
  }
};
