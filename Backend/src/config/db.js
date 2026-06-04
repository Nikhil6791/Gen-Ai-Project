const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to DB");
  } catch (error) {
    console.log(error);
    console.log("Error while connecting to DB");
  }
}

module.exports = connectDB;
