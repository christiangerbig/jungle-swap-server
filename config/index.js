const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  
  // Requests from outside
  app.set("trust proxy", 1);

  // Pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );

  // Logs for development
  app.use(logger("dev"));

  // Access to `body` property in request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};