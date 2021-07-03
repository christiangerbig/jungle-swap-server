const { Schema, model } = require("mongoose");

require("./User.model");
require("./Plant.model");

const RequestSchema = new Schema(
  {
    buyer: {
      type: Schema.Types.ObjectId, 
      ref: "user"
    },
    seller: {
      type: Schema.Types.ObjectId, 
      ref: "user"
    },
    plant: {
      type: Schema.Types.ObjectId, 
      ref: "plant"
    },
    message: String,
    reply: String
  }
);

const RequestModel = model("request", RequestSchema);

module.exports = RequestModel;