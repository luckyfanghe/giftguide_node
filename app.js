const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const rootRoute = require("./routes/root");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("../the-gift-guide-fe/build/"));
app.use("/api/", rootRoute);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../the-gift-guide-fe/build/", "index.html")
  );
});

module.exports = app;
