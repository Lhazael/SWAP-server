const express = require("express");
const router = express.Router();
const Offer = require("../models/Offer");

// api/offers
// GET ALL OFFERS IN THE DB

router.get("/", (req, res) => {
  Offer.find()
    .then((documentOffers) => {
      res.status(200).json(documentOffers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Cannot find any offer" });
    });
});

// GET ONE OFFER IN THE DB

router.get("/:id", (req, res) => {
  Offer.findById(req.params.id) // (req.body) => input  // (req.params.id) => url
    .then((documentOffer) => {
      res.status(200).json(documentOffer);
    })
    .catch((err) => {
      res.status(500).json({ message: "Cannot find any offer" });
    });
});

// CREATE AN OFFER IN THE DB

router.post("/", (req, res) => {
  const { title, description, condition, size, lookingFor, picture, price } =
    req.body;

  const newOffer = {
    title,
    description,
    condition,
    size,
    lookingFor,
    picture,
    price,
  };

  Offer.create(newOffer)
    .then((documentOffer) => {
      res.status(200).json(documentOffer);
    })
    .catch((err) => {
      res.status(500).json({ message: "Cannot create offer" });
    });
});

// UPDATE AN OFFER

router.patch("/:id", (req, res) => {
  Offer.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((documentOffer) => {
      res.status(200).json(documentOffer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Cannot update offer" });
    });
});

// DELETE AN OFFER

router.delete("/:id", (req, res) => {
  Offer.findByIdAndRemove(req.params.id)
    .then((documentOffer) => {
      res.status(200).json(documentOffer, { message: "Deleted" })
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Cannot delete offer" })
    });
});

module.exports = router;
