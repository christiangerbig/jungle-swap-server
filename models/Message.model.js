const { Schema, model } = require("mongoose");

require("./User.model");
require("./Plant.model");

const MessageSchema = new Schema({
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  plant: {
    type: Schema.Types.ObjectId,
    ref: "plant",
  },
  request: String,
  reply: String,
  messageState: Boolean,
});

const MessageModel = model("request", MessageSchema);

module.exports = MessageModel;
