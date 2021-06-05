const { Schema, model } = require("mongoose");

const RequestSchema = new Schema(
  {
    buyer: {
      type: Schema.Types.ObjectId, ref: "User"
    },
    seller: {
      type: Schema.Types.ObjectId, ref: "User"
    },
    plant: Object,
    message: String
  }
);

const RequestModel = model("request", RequestSchema);

module.exports = RequestModel;