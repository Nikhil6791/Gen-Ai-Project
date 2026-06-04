const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already taken"],
  },

  email: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Account already exists with this email"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
