const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  user_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  phone_number: {
    type: String
  },
  avatar_path: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
