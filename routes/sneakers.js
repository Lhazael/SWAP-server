const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker");
const axios = require("axios");

// ROUTES FROM API

// GRAB ONE SNEAKER BY ID

router.get("/id/:id", (req, res, next) => {
  console.log(req.params.id);
  axios
   .get(process.env.SNEAKSERVER_URL + "/id/" + req.params.id)
   .then((response) => {
    res.status(200).json(response.data);
  })
  .catch(next);
  console.log("Cannot find any sneakers");
});

// MOST POPULAR

router.get("/home", (req, res, next) => {
  axios
    .get(process.env.SNEAKSERVER_URL + "/home")
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(next);
    console.log("Cannot find any sneakers");
});

// GRAB SNEAKERS FROM KEYWORDS

router.get("/search/:keyword", (req, res, next) => {
  console.log(req.params.keyword)
  axios
    .get(process.env.SNEAKSERVER_URL + "/search/" + req.params.keyword)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(next);
    console.log("Cannot find any sneakers");
});

// TO HAVE PRICES BY STYLE ID

router.get("/id/:styleID/prices", (req, res, next) => {
  axios
    .get(process.env.SNEAKSERVER_URL+ `/id/${req.params.styleID}/prices`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(next);
    console.log("Cannot find any sneakers");
});


module.exports = router;
