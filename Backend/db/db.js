const mongoose = require("mongoose");

function connectDb() {
  mongoose
    .connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error("Database connection error:", err));
}

module.exports = connectDb;
