// Connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// Set MongoDB URI for app to have access to it
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/jungle-swap";

mongoose.connect(
  MONGO_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)
  .then(
    (x) => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    }
  )
  .catch(
    (err) => {
      console.error("Error connecting to mongo: ", err);
    }
  );