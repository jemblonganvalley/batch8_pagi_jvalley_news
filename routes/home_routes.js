//import package yang dibutuhkan
const express = require("express");
const home = express.Router();
const axios = require("axios");

home.get("/", (req, res) => {
  res.render("home");
});

module.exports = home;
