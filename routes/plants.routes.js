const express = require("express");
const router = express.Router();
const PlantModel = require("../models/Plant.model");
const RequestModel = require("../models/Request.model");

// GET All plants
router.get(
  "/plants",
  (req, res) => {
    PlantModel.find()
      .then(
        (plants) => {
          res.status(200).json(plants);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Find plant failed",
              message: err
            }
          );
        }
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
      .then(
        (plants) => {
          res.status(200).json(plants);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Search plant failed",
              message: err
            }
          );
        }
      );
  }
);

// POST Create plant
router.post(
  "/plants/create",
  (req, res) => {
    const { name, description, location, image, size, price } = req.body;
    const newPlant = {
      name,
      description,
      size,
      image,
      location,
      price,
      creator: req.session.loggedInUser._id
    };
    PlantModel.create(newPlant)
      .then(
        (response) => {
          res.status(200).json(response);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Create plant failed",
              message: err
            }
          );
        }
      );
  }
);

// GET Plant by id
router.get(
  "/plants/:plantId",
  (req, res) => {
    PlantModel.findById(req.params.plantId)
      .then(
        (response) => {
          res.status(200).json(response);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Edit plant failed",
              message: err
            }
          );
        }
      );
  }
);

// DELETE plant
router.delete(
  "/plants/:id",
  (req, res) => {
    PlantModel.findByIdAndDelete(req.params.id)
      .then(
        (response) => {
          res.status(200).json(response);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Delete plant failed",
              message: err
            }
          );
        }
      );
  }
);

// PATCH Plant
router.patch(
  "/plants/:id",
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
        (response) => {
          res.status(200).json(response);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Update plant failed",
              message: err
            }
          );
        }
      );
  }
);

// POST Request
router.post(
  "/plants/request",
  (req, res) => {
    const { message, buyer, seller, plant } = req.body;
    const request = {
      buyer,
      seller,
      plant,
      message
    }
    RequestModel.create(request)
      .then(
        (response) => {
          res.status(200).json(response);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Create request failed",
              message: err
            }
          );
        }
      );
  }
);

// GET My requests
router.get(
  "/myrequests",
  (req, res) => {
    RequestModel.find({})
      .then(
        (requests) => {
          console.log("Requests server", requests);
          res.status(200).json(requests);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Get requests failed",
              message: err
            }
          );
        }
      );
  }
);

module.exports = router;