const express = require("express");
const router = express.Router();
const PlantModel = require("../models/Plant.model");

// GET Fetch all plants
router.get(
  "/plants/fetch",
  (req, res) => {
    PlantModel.find()
      .populate("creator")
      .then(
        (plants) => res.status(200).json(plants)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Find all plants failed",
            message: err
          }
        )
      );
  }
);

// GET Search plant
router.get(
  "/plants/search",
  (req, res) => {
    const name = req.query.q
    PlantModel.find(
      {
        name: {
          $regex: `^${name}`,
          $options: "i"
        }
      }
    )
      .populate("creator")
      .then(
        (plants) => res.status(200).json(plants)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Search plant failed",
            message: err
          }
        )
      );
  }
);

// POST Create plant
router.post(
  "/plants/create",
  (req, res) => {
    const creator = req.session.loggedInUser._id;
    const { name, description, size, image, location, price } = req.body;
    // Server side validation
    if (!name || !description || !size || !location || !price) {
      res.status(500).json({ error: "Please enter name, description, size, location and price" });
      return;
    }
    const newPlant = {
      name,
      description,
      size,
      image,
      location,
      price,
      creator
    };
    PlantModel.create(newPlant)
      .then(
        (response) => res.status(200).json(response)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Create plant failed",
            message: err
          }
        )
      );
  }
);

// GET Single plant
router.get(
  "/plants/read/:plantId",
  (req, res) => {
    PlantModel.findById(req.params.plantId)
      .populate("creator")
      .then(
        (response) => res.status(200).json(response)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Read plant failed",
            message: err
          }
        )
      );
  }
);

// PATCH Update plant
router.patch(
  "/plants/update/:id",
  (req, res) => {
    const id = req.params.id;
    const { name, description, size, location, image, price } = req.body;
    const updatedPlant = {
      name,
      description,
      size,
      image,
      location,
      price
    };
    PlantModel.findByIdAndUpdate(
      id, 
      { $set: updatedPlant }, 
      { new: true }
    )
      .then(
        (response) => res.status(200).json(response)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Update plant failed",
            message: err
          }
        )
      );
  }
);

// DELETE plant
router.delete(
  "/plants/delete/:id",
  (req, res) => {
    PlantModel.findByIdAndDelete(req.params.id)
      .then(
        (response) => res.status(200).json(response)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Delete plant failed",
            message: err
          }
        )
      );
  }
);

module.exports = router;