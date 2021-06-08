const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
    model: String,
    brand: String,
    sku: String, 
    retailPrice: Number,
    releaseDate: String,
    image: [String],
});

const Sneaker = mongoose.model("Sneaker", sneakerSchema);

module.exports = Sneaker;