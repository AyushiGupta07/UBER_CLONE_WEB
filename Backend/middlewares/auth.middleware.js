const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captionModel = require("../models/caption.model");

module.exports.authUser = async (req, res, next) => {
  console.log(req.headers, 777);
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isBlackListed = await blacklistTokenModel.findOne({ token: token });
  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCation = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  console.log(token,299);
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }
  const isBlackListed = await blacklistTokenModel.findOne({ token: token });
  if (isBlackListed) {
    res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const caption = await captionModel.findById(decoded.id);
    req.caption = caption;
    return next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
