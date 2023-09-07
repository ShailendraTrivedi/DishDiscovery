const express = require("express");
require("./config/db_config");
const { APP_PORT } = require("./constant");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Routes
const UserRoutes = require("./Routes/UserRoutes");
const RecipeRoutes = require("./Routes/RecipeRoutes");

app.use("/foodieuser", UserRoutes);
app.use("/foodieblog", RecipeRoutes);

app.listen(APP_PORT, () => {
  console.log(`Server is started on PORT: http://localhost:${APP_PORT}`);
});
