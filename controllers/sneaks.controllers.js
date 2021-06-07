const axios = require('axios');
const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker");
// const User = require("../models/User");

// GET SNEAKERS


const getSneakers = async (req, res, next) => {
    try {
      const sneakers = await axios
        .get('https://the-sneaker-database.p.rapidapi.com/?rapidapi-key=API_KEY/sneakers?limit=50')
        .then(({ data }) => data.results)
  
      res.json({ sneakers })
    } catch (error) {
      return next(error)
    }
  }

const getSneakersByBrand = async (req, res, next) => {
    const { brand } = req.params
  
    try {
      const sneakers = await axios
        .get('https://the-sneaker-database.p.rapidapi.com/?rapidapi-key=API_KEY/sneakers?limit=50&brand=${brand}')
        .then(({ data }) => data.results)

        res.json({ sneakers })
  } catch (error) {
    return next(error)
  }
}

exports.getSneakers = getSneakers
exports.getSneakersByBrand = getSneakersByBrand