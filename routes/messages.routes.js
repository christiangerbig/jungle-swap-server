const express = require("express");
const router = express.Router();
const RequestModel = require("../models/Request.model");

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
        (err) => res.status(500).json(
          {
            error: "Get requests failed",
            message: err
          }
        )
      );
  }
);

module.exports = router;