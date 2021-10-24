const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  type: { type: String },
  genre: { type: String },
  content: { type: Array },
});

module.exports = mongoose.model("User", ListSchema);

// const UserModule = mongoose.model("User", UserSchema);

// export default UserModule;
