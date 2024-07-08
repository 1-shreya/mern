const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  datecreated: Date,
  creatorname: String,
});

const UserModel = mongoose.model("users", MuseumSchema);
module.exports = UserModel;
