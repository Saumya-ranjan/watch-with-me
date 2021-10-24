const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String },
  img: { type: String },
  imgTitle: { type: String },
  imgSml: { type: String },
  trailer: { type: String },
  video: { type: String },
  year: { type: String },
  ageLimit: { type: Number },
  genre: { type: String },
  isSeries: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", MovieSchema);

// const UserModule = mongoose.model("User", UserSchema);

// export default UserModule;
