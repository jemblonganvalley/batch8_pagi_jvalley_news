//import package yang dibutuhkan
const express = require("express");
const home = express.Router();
const axios = require("axios");

home.get("/", (req, res) => {
  axios
    .get(
      "https://dev.to/api/articles?tag=express&page=1&per_page=10&state=fresh"
    )
    .then((e) => {
      console.log(e.data);
      res.render("home", { data: e.data });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = home;
