const express = require("express");
const router = express.Router();
const RequestModel = require("../models/Request.model");

// GET Fetch all requests
router.get("/requests/fetch", (req, res) => {
  RequestModel.find()
    .populate("buyer")
    .populate("seller")
    .populate("plant")
    .then((response) => res.status(200).json(response))
    .catch((err) =>
      res.status(500).json({
        error: "Get requests failed",
        message: err,
      })
    );
});

// POST Create request
router.post("/requests/create", (req, res) => {
  const buyer = req.session.loggedInUser._id;
  const { message, seller, plant } = req.body;
  const reply = "";
  if (!message)
    return res.status(500).json({ error: "Please enter message text" });
  const newRequest = {
    buyer,
    seller,
    plant,
    message,
    reply,
    requestState: true,
  };
  RequestModel.create(newRequest)
    .then((response) => res.status(200).json(response))
    .catch((err) =>
      res.status(500).json({
        error: "Create request failed",
        message: err,
      })
    );
});

// GET Single request
router.get("/requests/read/:requestId", (req, res) => {
  RequestModel.findById(req.params.requestId)
    .populate("buyer")
    .populate("seller")
    .populate("plant")
    .then((response) => res.status(200).json(response))
    .catch((err) =>
      res.status(500).json({
        error: "Read request failed",
        message: err,
      })
    );
});

// PATCH Update request
router.patch("/requests/update/:requestId", (req, res) => {
  const { buyer, seller, plant, message, reply, requestState } = req.body;
  const updatedRequest = {
    buyer,
    seller,
    plant,
    message,
    reply,
    requestState,
  };
  RequestModel.findByIdAndUpdate(
    req.params.requestId,
    { $set: updatedRequest },
    { new: true }
  )
    .then((response) => res.status(200).json(response))
    .catch((err) =>
      res.status(500).json({
        error: "Update request failed",
        message: err,
      })
    );
});

// DELETE request
router.delete("/requests/delete/:requestId", (req, res) => {
  RequestModel.findByIdAndDelete(req.params.requestId)
    .then((response) => res.status(200).json(response))
    .catch((err) =>
      res.status(500).json({
        error: "Delete request failed",
        message: err,
      })
    );
});

module.exports = router;
