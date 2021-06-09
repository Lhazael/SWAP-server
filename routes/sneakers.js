const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker");
const axios = require("axios");

// GET SNEAKERS

router.get("/home", (req, res, next) => {
  axios
    .get("http://localhost:5000/home")
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(next);
});



router.get("/", (req, res) => {
  Sneaker.find()
    .then((documentSneakers) => {
      res.status(200).json(documentSneakers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Cannot find any sneakers" });
    });
});

// GET ONE SNEAKERS IN THE DB/API

router.get("/:id", (req, res) => {
  Sneaker.findById(req.params.id)
    .then((documentSneaker) => {
      res.status(200).json(documentSneaker);
    })
    .catch((err) => {
      res.status(500).json({ message: "Cannot find any sneaker" });
    });
});

module.exports = router;
