const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: "https://i.pinimg.com/originals/b7/21/26/b721265eb826b20e6f91d6643b95c122.jpg"
    }
  }
);

const UserModel = model("user", UserSchema);

module.exports = UserModel;