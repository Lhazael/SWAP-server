const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

const salt = 10;

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((userDocument) => {
      if (!userDocument) {
        return res.status(400).json({ message: "Invalid email" });
      }

      const isValidPassword = bcrypt.compareSync(
        password,
        userDocument.password
      );
      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid password" });
      }

      req.session.currentUser = {
        // role: "admin",
        id: userDocument._id,
      };
      console.log(userDocument.id);

      res.redirect("/api/auth/isLoggedIn");
    })
    .catch(next);
});

router.post("/signup", (req, res, next) => {
  const { email, password, firstName, lastName, username } = req.body;

  User.findOne({ email })
    .then((userDocument) => {
      if (userDocument) {
        return res.status(400).json({ message: "Email already taken" });
      }

      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = { email, lastName, firstName, password: hashedPassword, username };

      User.create(newUser)
        .then((newUserDocument) => {
          /* Login on signup */
          req.session.currentUser = {
            
              id: newUserDocument._id
          }
          res.redirect("/api/auth/isLoggedIn");
        })
        .catch(next);
    })
    .catch(next);
});

router.get("/isLoggedIn", (req, res, next) => {
  if (!req.session.currentUser)
    return res.status(401).json({ message: "Unauthorized" });

  const id = req.session.currentUser.id;

  User.findById(id)
    .select("-password")
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch(next);
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(function (error) {
    if (error) next(error);
    else res.status(200).json({ message: "Succesfully disconnected." });
  });
});

module.exports = router;
