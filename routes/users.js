const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Offer = require('../models/Offer');

// Prefixe : api/users

router.get("/", function (req, res, next) {
    res.send('respond with a resource');
});

// UPDATE CURRENT USER

router.patch("/:id_username", (req, res) => {
    User.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
      .then((documentUser) => {
        res.status(200).json(documentUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Cannot update User' });
      });
  });

// GET USER INFOS

router.get('/:id_username', (req, res) => {
    User.findById(req.session.currentUser)
      .then((documentUser) => {
        res.status(200).json(documentUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Cannot find The User' });
      });
  });

// GET USER's OFFERS

router.get('/:id_username/offers', (req, res, next) => {

    Offer.find({creator: req.session.currentUser}).then((infos) => {
      res.status(200).json(infos);
    }).catch((err) => {
     next(err)
    });
});

module.exports = router;