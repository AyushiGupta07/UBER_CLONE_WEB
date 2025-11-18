const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.routes");
const connectToDB = require("./db/db");
const cookieParser = require("cookie-parser");
const captionRoutes = require("./routes/caption.routes");

connectToDB();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.use("/captions", captionRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
