const { Schema, model } = require("mongoose");

const PlantSchema = new Schema(
  {
    name: String,
    description: String,
    size: Number,
    image: String,
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
      ref: "User"
    }
  }
);

const PlantModel = model("plant", PlantSchema);

module.exports = PlantModel;