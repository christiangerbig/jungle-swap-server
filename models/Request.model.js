const { Schema, model } = require("mongoose");

require("/.User.model");

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
    plant: Object,
    message: String
  }
);

const RequestModel = model("request", RequestSchema);

module.exports = RequestModel;