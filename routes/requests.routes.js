const express = require("express");
const router = express.Router();
const RequestModel = require("../models/Request.model");

// GET Fetch all requests
router.get(
  "/requests/fetch",
  (req, res) => {
    RequestModel.find({})
      .populate("buyer")
      .populate("seller")
      .then(
        (requests) => res.status(200).json(requests)
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
    const buyer = req.session.loggedInUser._id;
    const { message, seller, plant } = req.body;
    const reply = "";
    // Server side validation
    if (!message) {
      res.status(500).json({ error: "Please enter message text" });
      return;
    }
    const newRequest = {
      buyer,
      seller,
      plant,
      message,
      reply
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

// PATCH Update request
router.patch(
  "/requests/update/:id",
  (req, res) => {
    const id = req.params.id;
    const { buyer, seller, plant, message, reply } = req.body;
    const updatedRequest = {
      buyer,
      seller,
      plant,
      message,
      reply
    };
    RequestModel.findByIdAndUpdate(
      id, 
      { $set: updatedRequest }, 
      { new: true }
    )
      .then(
        (response) => res.status(200).json(response)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Update request failed",
            message: err
          }
        )
      );
  }
);

// DELETE request
router.delete(
  "/requests/delete/:id",
  (req, res) => {
    RequestModel.findByIdAndDelete(req.params.id)
      .then(
        (response) => res.status(200).json(response)
      )
      .catch(
        (err) => res.status(500).json(
          {
            error: "Delete request failed",
            message: err
          }
        )
      );
  }
);

module.exports = router;