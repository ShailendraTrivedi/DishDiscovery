const dotenv = require("dotenv");
dotenv.config();
const { APP_PORT, DATABASE_URL, SECRET_KEY } = process.env;

module.exports = {
  APP_PORT,
  DATABASE_URL,
  SECRET_KEY,
};
