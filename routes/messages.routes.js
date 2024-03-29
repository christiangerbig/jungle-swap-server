const express = require("express");
const router = express.Router();
const MessageModel = require("../models/Message.model");

// POST Create message
router.post("/messages/create", (req, res) => {
  const {
    body: { request, seller, plant },
    session: {
      loggedInUser: { _id },
    },
  } = req;
  const buyer = _id;
  const reply = "";
  if (!request) {
    res.status(500).json({ error: "Form: Request text missing" });
    return;
  }
  const newMessage = {
    buyer,
    seller,
    plant,
    request,
    reply,
    messageState: true,
  };
  MessageModel.create(newMessage)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Create message failed",
        message: err,
      });
    });
});

// GET Fetch all messages
router.get("/messages/fetch-all", (req, res) => {
  MessageModel.find()
    .populate("buyer")
    .populate("seller")
    .populate("plant")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Fetch all messages failed",
        message: err,
      });
    });
});

// GET Fetch single message
router.get("/messages/fetch/:messageId", (req, res) => {
  const {
    params: { messageId },
  } = req;
  MessageModel.findById(messageId)
    .populate("buyer")
    .populate("seller")
    .populate("plant")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Fetch message failed",
        message: err,
      });
    });
});

// PATCH Update message
router.patch("/messages/update/:messageId", (req, res) => {
  const {
    body: { buyer, seller, plant, request, reply, messageState },
    params: { messageId },
  } = req;
  if (!reply && messageState) {
    res.status(500).json({ error: "Form: Reply text missing" });
    return;
  }

  const updatedMessage = {
    buyer,
    seller,
    plant,
    request,
    reply,
    messageState,
  };
  MessageModel.findByIdAndUpdate(
    messageId,
    { $set: updatedMessage },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Update message failed",
        message: err,
      });
    });
});

// DELETE message
router.delete("/messages/delete/:messageId", (req, res) => {
  const {
    params: { messageId },
  } = req;
  MessageModel.findByIdAndDelete(messageId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Delete message failed",
        message: err,
      });
    });
});

module.exports = router;
