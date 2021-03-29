//import package yang dibutuhkan
const express = require("express");
const home = express.Router();

home.get("/", (req, res) => {
  res.render("home.html");
});

module.exports = home;
