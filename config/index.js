// For access to the `body` property in requests
const express = require("express");

// Handle messages in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// Cookies for authentication
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

// ℹFor requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request if from the same domain, by default express wont accept POST requests
const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  // Needed for requests from outside
  app.set("trust proxy", 1);

  // Control to pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));

  // Access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Handle access to the favicon
};