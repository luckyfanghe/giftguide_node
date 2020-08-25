require("dotenv").config();

const database = {
  DB_PORT: process.env.DB_PORT || 5000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://aleksandar:kgh1916015011@test1-s8hu3.mongodb.net/test?retryWrites=true&w=majority",
  DB_USERNAME: process.env.DB_USERNAME || "aleksandar",
  DB_PASSWORD: process.env.DB_PASSWORD || "kgh1916015011"
};

module.exports = database;
