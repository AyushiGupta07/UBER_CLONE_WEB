const blacklistTokenModel = require("../models/blacklistToken.model");
const captionModel = require("../models/caption.model");
const captionService = require("../services/caption.service");
const { validationResult } = require("express-validator");

module.exports.registerCaption = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password, vehicle } = req.body;
  const isCaptionExist = await captionModel.findOne({ email: email });
  if (isCaptionExist) {
    return res.status(400).json({ message: "Caption already exists" });
  }
  const hashedPassword = await captionModel.hashPassword(password);
  const caption = await captionService.createCaption({
    fullName: {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    },
    email,
    password: hashedPassword,
    vehicle: {
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    },
  });
  const token = await caption.generateAuthToken();
  res.status(201).json({ token, caption });
};

module.exports.loginCaption = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    throw new Error("Validation Error");
  }
  const { email, password } = req.body;
  const caption = await captionModel
    .findOne({ email: email })
    .select("+password");
  if (!caption) {
    res.status(400).json({ message: "Caption does not exist, Kindly signUp" });
  }
  const isMatch = await caption.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email or password" });
  }

  const token = await caption.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, caption });
};

module.exports.getCaptionProfile = async (req, res, next) => {
  return res.status(200).json({caption: req.caption});
};

module.exports.logoutCaption = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorzation?.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.clearCookie(token);
  res.status(200).json({ message: "logout successfully" });
};
