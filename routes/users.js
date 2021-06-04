const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Offer = require('../models/Offer');

// Prefixe : api/users

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Update the current user

module.exports = router;