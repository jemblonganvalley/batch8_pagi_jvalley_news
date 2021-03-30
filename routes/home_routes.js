//import package yang dibutuhkan
const express = require("express");
const home = express.Router();
const axios = require("axios");

home.get("/", (req, res) => {
  axios
    .get("https://dev.to/api/articles?tag=nextjs&page=2&per_page=9&state=fresh")
    .then((e) => {
      res.render("home", { data: e.data });
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

home.get("/home/:page", (req, res) => {
  const page = req.params.page;
  axios
    .get(
      `https://dev.to/api/articles?tag=nextjs&page=${page}&per_page=9&state=fresh`
    )
    .then((e) => {
      res.render("home", { data: e.data });
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = home;
