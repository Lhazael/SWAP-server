const express = require('express');
const router = express.Router();
const sneakersController = require('../controllers/sneaks.controllers.js');

// GET SNEAKERS via API

router.get('/', sneakersController.getSneakers)
router.get('/:brand', sneakersController.getSneakersByBrand)

module.exports = router;