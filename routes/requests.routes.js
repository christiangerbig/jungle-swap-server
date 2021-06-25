const express = require("express");
const router = express.Router();
const RequestModel = require("../models/Request.model");

// GET Fetch all requests
router.get(
  "/requests/fetch",
  (req, res) => {
    RequestModel.find({})
      .then(
        (requests) => {
          console.log("Requests server", requests);
          res.status(200).json(requests);
        }
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Get requests failed",
            message: err
          }
        )
      );
  }
);

// POST Create request
router.post(
  "/requests/create",
  (req, res) => {
    const { message, buyer, seller, plant } = req.body;
    const newRequest = {
      buyer,
      seller,
      plant,
      message
    }
    RequestModel.create(newRequest)
      .then(
        (response) => res.status(200).json(response)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Create request failed",
            message: err
          }
        )
      );
  }
);

module.exports = router;