const mongoose = require("mongoose");
const { DATABASE_URL } = require("../constant");

// Connect to the MongoDB database
mongoose
  .connect(`${DATABASE_URL}/DishDiscovery`)
  .then(() => {
    console.log("Database connection successfully !");
  })
  .catch(() => {
    console.log("Database connection error !");
  });

