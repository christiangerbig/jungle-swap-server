const { Schema, model } = require("mongoose");

require("./User.model");

const PlantSchema = new Schema(
  {
    name: String,
    description: String,
    size: Number,
    image: String,
    imagePublicId: String,
    location: {
      type: String,
      enum: [
        "Select location",
        "sun", "shade",
        "sun and shade"
      ]
    },
    price: Number,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  }
);

const PlantModel = model("plant", PlantSchema);

module.exports = PlantModel;