const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User.model");

// POST Signup
router.post("/auth/signup", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res
      .status(500)
      .json({ error: "Please enter username, email and password" });
    return;
  }
  // Email validation
  const emailRegExp = new RegExp(
    /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
  );
  if (!emailRegExp.test(email)) {
    res.status(500).json({ error: "Email format not correct" });
    return;
  }
  // Password validation
  const passwordRegExp = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  );
  if (!passwordRegExp.test(password)) {
    res.status(500).json({
      error:
        "Password needs to have 8 characters, a number, a special character and an Uppercase alphabet",
    });
    return;
  }
  // Creating salt
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);
  UserModel.create({
    username,
    email,
    passwordHash,
    amountOfRequests: 0,
    amountOfReplies: 0,
  })
    .then((user) => {
      user.passwordHash = "***"; // Ensuring that hash is not shared as well with user
      res.status(200).json(user);
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(500).json({
          error: "Username or email entered already exists!",
          message: err,
        });
      } else {
        res.status(500).json({
          error: "Error while creating user",
          message: err,
        });
      }
    });
});

// POST Signin
router.post("/auth/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(500).json({ error: "Please enter email and password" });
    return;
  }
  // Email validation
  const emailRegExp = new RegExp(
    /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
  );
  if (!emailRegExp.test(email)) {
    res.status(500).json({ error: "Email format not correct" });
    return;
  }
  // Look up if user exists in the database
  UserModel.findOne({ email })
    .then((userData) => {
      // Check if passwords match
      bcrypt
        .compare(password, userData.passwordHash)
        .then((doesItMatch) => {
          // If password matches
          if (doesItMatch) {
            userData.passwordHash = "***";
            req.session.loggedInUser = userData;
            res.status(200).json(userData);
          }
          // If passwords do not match
          else {
            res.status(500).json({ error: 'Passwords don"t match' });
            return;
          }
        })
        .catch(() => {
          res.status(500).json({ error: "Email format not correct" });
          return;
        });
    })
    .catch((err) => {
      res.status(500).json({
        error: "User does not exist",
        message: err,
      });
      return;
    });
});

// POST Logout
router.post("/auth/logout", (req, res) => {
  const { username, email, password, amountOfRequests, amountOfReplies } =
    req.body;
  const updatedUser = {
    username,
    email,
    password,
    amountOfRequests,
    amountOfReplies,
  };
  UserModel.findOneAndUpdate({ email }, { $set: updatedUser }, { new: true })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Could not update user",
        message: err,
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
      code: 401,
    });
  }
};

// GET protected route
router.get("/auth/checkuser", checkUserLoggedIn, (req, res) => {
  res.status(200).json(req.session.loggedInUser);
});

module.exports = router;
