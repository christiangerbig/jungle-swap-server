const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User.model");

// POST Sign up
router.post("/auth/sign-up", (req, res) => {
  const { username, email, password } = req.body;
  // Check if parameters are missing
  if (!username) {
    res.status(500).json({ error: "Form: Username missing" });
    return;
  }
  if (!email) {
    res.status(500).json({ error: "Form: Email missing" });
    return;
  }
  if (!password) {
    res.status(500).json({ error: "Form: Password missing" });
    return;
  }
  // Email validation
  const emailRegExp = new RegExp(
    /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
  );
  if (!emailRegExp.test(email)) {
    res.status(500).json({ error: "Form: Email format invalid" });
    return;
  }
  // Password validation
  const passwordRegExp = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  );
  if (!passwordRegExp.test(password)) {
    res.status(500).json({
      error:
        "Form: Password invalid",
    });
    return;
  }
  // Creating salt and password
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);
  // Create user
  const newUser = {
    username,
    email,
    passwordHash,
    amountOfRequests: 0,
    amountOfReplies: 0,
  };
  UserModel.create(newUser)
    .then((user) => {
      user.passwordHash = "***"; // Ensuring that hash is not shared as well with user
      res.status(200).json(user);
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(500).json({
          error: "Form: Username or email already exists",
          message: err
        });
      } else {
        res.status(500).json({
          error: "Error while creating user",
          message: err
        });
      }
    });
});

// POST Sign in
router.post("/auth/sign-in", (req, res) => {
  const { email, password } = req.body;
  // Check if parameters are missing
  if (!email) {
    res.status(500).json({ error: "Form: Email missing" });
    return;
  }
  if (!password) {
    res.status(500).json({ error: "Form: Password missing" });
    return;
  }
  // Email validation
  const emailRegExp = new RegExp(
    /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
  );
  if (!emailRegExp.test(email)) {
    res.status(500).json({ error: "Form: Email format invalid" });
    return;
  }
  // Look up if user exists in the database
  UserModel.findOne({ email })
    .then((userData) => {
      // Check if passwords match
      bcrypt
        .compare(password, userData.passwordHash)
        .then((isPasswordMatch) => {
          if (isPasswordMatch) {
            userData.passwordHash = "***";
            req.session.loggedInUser = userData;
            res.status(200).json(userData);
          } else {
            res.status(500).json({ error: "Form: Passwords don't match" });
            return;
          }
        })
        .catch(() => {
          res.status(500).json({ error: "Form: Email format invalid" });
          return;
        });
    })
    .catch((err) => {
      res.status(500).json({
        error: "User does not exist",
        message: err
      });
      return;
    });
});

// POST Log out
router.post("/auth/log-out", (req, res) => {
  const { username, email, password, amountOfRequests, amountOfReplies } =
    req.body;
  const updatedUser = {
    username,
    email,
    password,
    amountOfRequests,
    amountOfReplies
  };
  UserModel.findOneAndUpdate({ email }, { $set: updatedUser }, { new: true })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Could not update user",
        message: err
      });
      req.session.destroy();
      return;
    });
  req.session.destroy();
  res.status(204).json({}); // Nothing to send back to the user
});

// Middleware to check if user is logged in
const checkUserLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized user",
      code: 401
    });
  }
};

// GET Check for protected route
router.get("/auth/check-user", checkUserLoggedIn, (req, res) => {
  res.status(200).json(req.session.loggedInUser);
});

module.exports = router;
