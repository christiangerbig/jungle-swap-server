const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User.model");

// POST Signup
router.post(
  "/signup",
  (req, res) => {
    const { username, email, password } = req.body;
    // Server side validation
    if (!username || !email || !password) {
      res.status(500).json(
        {
          error: "Please enter username, email and password"
        }
      );
      return;
    }
    // // Email validation
    // const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    // if (!myRegex.test(email)) {
    //   res.status(500).json(
    //     {
    //       error: "Email format not correct"
    //     }
    //   );
    //   return;
    // }
    // // Password validation
    // const myPassRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    // if (!myPassRegex.test(password)) {
    //   res.status(500).json(
    //     {
    //       error: "Password needs to have 8 characters, a number, a special character and an Uppercase alphabet"
    //     }
    //   );
    //   return;
    // }
    // Creating a salt 
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    UserModel.create(
      {
        name: username,
        email,
        passwordHash: hash
      }
    )
      .then(
        (user) => {
          // Ensuring that hash is not shared as well with user
          user.passwordHash = "***";
          res.status(200).json(user);
        }
      )
      .catch(
        (err) => {
          if (err.code === 11000) {
            res.status(500).json(
              {
                error: "Username or email entered already exists!",
                message: err
              }
            );
          }
          else {
            res.status(500).json(
              {
                error: "Something went wrong! Go to sleep!",
                message: err
              }
            );
          }
        }
      );
  }
);

// POST Signin
router.post(
  "/signin",
  (req, res) => {
    const { email, password } = req.body;
    // Server side validation
    if (!email || !password) {
      res.status(500).json(
        {
          error: "Please enter Username, email and password"
        }
      );
      return;
    }
    // Valid email
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
      res.status(500).json(
        {
          error: "Email format not correct"
        }
      );
      return;
    }
    // Look up if the user exists in the database
    UserModel.findOne({ email })
      .then(
        (userData) => {
          // Check if passwords match
          bcrypt.compare(password, userData.passwordHash)
            .then(
              (doesItMatch) => {
                // If it matches
                if (doesItMatch) {
                  userData.passwordHash = "***";
                  req.session.loggedInUser = userData;
                  res.status(200).json(userData);
                }
                // If passwords do not match
                else {
                  res.status(500).json(
                    {
                      error: "Passwords don\"t match"
                    }
                  );
                  return;
                }
              }
            )
            .catch(
              () => {
                res.status(500).json(
                  {
                    error: "Email format not correct"
                  }
                );
                return;
              }
            );
        }
      )
      // Throw an error if the user does not exists 
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Email does not exist",
              message: err
            }
          );
          return;
        }
      );
  }
);

// POST Logout
router.post(
  "/logout",
  (req, res) => {
    req.session.destroy();
    // Nothing to send back to the user
    res.status(204).json({});
  }
);

// Middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    next()
  }
  else {
    res.status(401).json(
      {
        message: "Unauthorized user",
        code: 401
      }
    );
  }
};

// GET protected route
router.get(
  "/user",
  isLoggedIn,
  (req, res, next) => {
    res.status(200).json(req.session.loggedInUser);
  }
);

module.exports = router;