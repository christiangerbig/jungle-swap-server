const express = require("express");
const router = express.Router();
const PlantModel = require("../models/Plant.model");

// POST Create plant
router.post("/plants/create", (req, res) => {
  const creator = req.session.loggedInUser._id;
  const { name, description, size, imageUrl, imagePublicId, location, price } =
    req.body;
  // Check if plant parameters are missing
  if (!name) {
    res.status(500).json({
      error: "Form: Name missing"
    });
    return;
  }
  if (!description) {
    res.status(500).json({
      error: "Form: Description missing"
    });
    return;
  }
  if (!size) {
    res.status(500).json({
      error: "Form: Size missing"
    });
    return;
  }
  if (location === "Select location") {
    res.status(500).json({
      error: "Form: Location missing"
    });
    return;
  }
  if (!price) {
    res.status(500).json({
      error: "Form: Price missing"
    });
    return;
  }
  // Create new plant object
  const newPlant = {
    name,
    description,
    size,
    imageUrl,
    imagePublicId,
    location,
    price,
    creator,
  };
  PlantModel.create(newPlant)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Create plant failed",
        message: err,
      });
    });
});

// GET Fetch all plants
router.get("/plants/fetch-all", (req, res) => {
  PlantModel.find()
    .populate("creator")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Fetch all plants failed",
        message: err,
      });
    });
});

// GET Search plant
router.get("/plants/search", (req, res) => {
  const name = req.query.q;
  PlantModel.find({
    name: {
      $regex: `^${name}`,
      $options: "i",
    },
  })
    .populate("creator")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Search plant failed",
        message: err,
      });
    });
});

// GET Fetch single plant
router.get("/plants/fetch/:plantId", (req, res) => {
  const { plantId } = req.params;
  PlantModel.findById(plantId)
    .populate("creator")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Fetch plant failed",
        message: err,
      });
    });
});

// PATCH Update plant
router.patch("/plants/update/:plantId", (req, res) => {
  const { name, description, size, location, imageUrl, imagePublicId, price } =
    req.body;
  const { plantId } = req.params;
  const updatedPlant = {
    name,
    description,
    size,
    imageUrl,
    imagePublicId,
    location,
    price,
  };
  PlantModel.findByIdAndUpdate(plantId, { $set: updatedPlant }, { new: true })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Update plant failed",
        message: err,
      });
    });
});

// DELETE plant
router.delete("/plants/delete/:plantId", (req, res) => {
  const { plantId } = req.params;
  PlantModel.findByIdAndDelete(plantId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Delete plant failed",
        message: err,
      });
    });
});

module.exports = router;
