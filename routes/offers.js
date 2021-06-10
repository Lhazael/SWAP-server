const express = require("express");
const router = express.Router();
const Offer = require("../models/Offer");
const cloudinaryUploader = require("../config/cloudinary");
const { SchemaTypeOptions } = require("mongoose");
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

router.post("/", cloudinaryUploader.single("picture"), (req, res, next) => {

 const newOffer = { ...req.body };

 if (req.file) {
  newOffer.picture = req.file.path;
}

newOffer.creator = req.session.currentUser;

  // const { title, styleID, description, condition, size, lookingFor, picture, price } =
  //   req.body;

// console.log(req.body);

  // const newOffer = {
  //   title,
  //   styleID,
  //   description,
  //   condition,
  //   size,
  //   lookingFor,
  //   picture,
  //   price,
  //   creator,  
  // };

  // req.session.currentUser = newOffer.creator;

  Offer.create(newOffer)
    .then((documentOffer) => {
      documentOffer
      .populate("creator")
      .execPopulate()
      .then((offer) => {
        console.log("Yoooooooo finally!!!");
        res.status(200).json(offer);
      })
      .catch(next);
    //   res.status(200).json(documentOffer);
    // })
    // .catch((err) => {
    //   console.log(err)
      // res.status(500).json({ message: "Cannot create offer" });
    })
    .catch(next);
    // .catch((err) => {
    // console.log(err)
    // res.status(500).json({ message: "Cannot create offer bis" });
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
