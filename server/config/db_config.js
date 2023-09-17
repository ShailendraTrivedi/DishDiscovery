const mongoose = require("mongoose");
const { ATLAS_DATABASE_URL } = require("../constant");
// Connect to the MongoDB database
console.log(ATLAS_DATABASE_URL);
const url = `${ATLAS_DATABASE_URL}/DishDiscovery`;
console.log(url);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Set the write concern to 'majority'
    writeConcern: { w: "majority" },
  })
  .then(() => {
    console.log("Database connection successfully !");
  })
  .catch(() => {
    console.log("Database connection error !");
  });
