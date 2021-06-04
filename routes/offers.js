const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');

// api/offers
// GET ALL OFFERS IN THE DB

router.get("/", (req, res) => {
    Offer.find()
    .then((documentOffers) => {
        res.status(200).json(documentOffers)
    })
    .catch ((err) => {
        console.log(err)
        res.status(500).json({message : 'Cannot find any offer'})
    });
});

// GET ONE OFFER IN THE DB

router.get("/:id", (req, res) => {
    Offer.findById(req.params.id)  // (req.body) => input  // (req.params.id) => url 
    .then((documentOffer) => {
        res.status(200).json(documentOffer)
    })
    .catch ((err) => {
        res.status(500).json({message: 'Cannot find any offer'})
    });
});

module.exports = router;