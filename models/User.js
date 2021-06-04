const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  lastName: String,
  firstName: String,
  username: { type: String, unique: true, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
