const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
    shoeName: String,
    brand: String,
    silhoutte: String,
    styleID: String, 
    retailPrice: Number,
    releaseDate: String,
    imageLinks: [String],
    thumbnail: String,
    colorway: String,
    resellLinks:{
        stockX: String,
        goat: String
    },
    size: Number,
    lowestResellPrice:{
        stockX: Number,
        goat: Number
    },
    resellPrices:{
        stockX: {},
        goat: {}
    }
   
});

const Sneaker = mongoose.model("Sneaker", sneakerSchema);

module.exports = Sneaker;