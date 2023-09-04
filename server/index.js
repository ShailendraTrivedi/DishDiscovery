const express = require("express");
require("./config/db_config");
const { APP_PORT } = require("./constant");
const app = express();
app.use(express.json());

// Routes
const UserRoutes = require("./Routes/UserRoutes");
const BlogRoutes = require("./Routes/BlogRoutes");

app.use("/foodieblog", UserRoutes);
app.use("/foodieblog", BlogRoutes);

app.listen(APP_PORT, () => {
  console.log(`Server is started on PORT: http://localhost:${APP_PORT}`);
});
