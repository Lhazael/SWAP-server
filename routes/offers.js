const express = require("express");
const router = express.Router();
const Offer = require("../models/Offer");
const User = require("../models/User");
const cloudinaryUploader = require("../config/cloudinary");

// api/offers
// GET ALL OFFERS IN THE DB

router.get("/", (req, res, next) => {
  Offer.find({})
    .populate("creator")  // Gives the author's id creator object document 
    .then((documentOffers) => {
      res.status(200).json(documentOffers);
    })
    .catch(next);
});

// GET ONE OFFER IN THE DB

router.get("/:id", (req, res, next) => {
  Offer.findById(req.params.id) // (req.body) => input  // (req.params.id) => url
    .populate("creator")
    .then((documentOffer) => {
      res.status(200).json(documentOffer);
    })
    .catch(next);
});

// CREATE AN OFFER IN THE DB

router.post("/", cloudinaryUploader.array("picture", 5), (req, res, next) => {
  const { title, styleID, description, condition, size, lookingFor, picture, price, creator } = req.body;
  const updateValues = { ...req.body };

  let picturesArray = []; // create empty array for the pictures

  if (req.files) {
    req.files.forEach(element => picturesArray.push(element.path)); // Push image urls into empty array
    updateValues.picture = picturesArray
  }
  console.log(req.body.creator);
  console.log(creator);
  console.log(req.session.currentUser);
  updateValues.creator = req.session.currentUser._id;

 // get the offer's creator's id

  Offer.create(updateValues)
  .then((offerDocument) => {
    offerDocument
    .populate("creator")
    .execPopulate()
    .then((offer) => {
      
      console.log("finally!!");
      res.status(200).json(offer); // send the populated document
    })
    .catch(next);
  })
.catch(next);
});


// UPDATE AN OFFER

router.patch("/:id", cloudinaryUploader.array("picture", 5), (req, res, next) => {
const offer = { ...req.body };

Offer.findById(req.params.id)
.then((offerDocument) => {
  if (!offerDocument)
  return res.status(404).json({message: "Offer not found"});
  if (offerDocument.creator.toString() !== req.session.currentUser) {
    return res.status(403).json({ message: "You are not allowed to update this offer!" });
  }

  let picturesArray = []; 

  if (req.files) {
    req.files.forEach(element => picturesArray.push(element.path));
    offer.picture = [...offerDocument.picture, ...picturesArray];
  }

  Offer.findByIdAndUpdate(req.params.id, offer, { new: true})
  .populate("creator")
  .then((updatedOffer) => {
    return res.status(200).json(updatedOffer);
  })
  .catch(next);
  })
  .catch(next);
});

// DELETE AN OFFER

router.delete("/:id", (req, res, next) => {
  Offer.findById(req.params.id)
  .then((offerDocument) => {
    if (!offerDocument) {
      return res.status(404).json({ message: "Offer not found" });
    }
    if (offerDocument.creator._id.toString() !== req.session.currentUser) {
      return res.status(403).json({ message: "You are not allowed to delete this offer" });
    }
    Offer.findByIdAndRemove(req.params.id)
      .then(() => {
        return res.sendStatus(204);
    })
    .catch(next);
})
.catch(next);
});


module.exports = router;
