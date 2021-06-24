require("dotenv/config");
require("./db");

const express = require("express");
const app = express();

// Run middlewares
require("./config")(app);

const session = require("express-session");
const MongoStore = require("connect-mongo").default;

app.use(
  session(
    {
      secret: "NotMyAge",
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 // In milliseconds.  expiring in 1 day
      },
      store: new MongoStore(
        {
          mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/jungle-swap",
          ttl: 60 * 60 * 24, // In seconds expiring in 1 day
        }
      )
    }
  )
);

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Routes
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api", authRoutes);

const plantsRoutes = require("./routes/plants.routes");
app.use("/api", plantsRoutes);

const cloudinaryRoutes = require("./routes/cloudinary.routes");
app.use("/api", cloudinaryRoutes);

const stripeRoutes = require("./routes/stripe.routes");
app.use("/api", stripeRoutes);

app.use(
  (req, res) => {
	  // If no routes match, send React HTML.
	  res.sendFile(__dirname + "/public/index.html");
    }
  );

// Error handling
require("./error-handling")(app);

module.exports = app;