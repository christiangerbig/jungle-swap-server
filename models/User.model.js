const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  amountOfRequests: Number,
  amountOfReplies: Number,
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;
