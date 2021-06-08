const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema(
    {
    title: String,
    id_sneaker: String,
    status: {
        type: String,
        enum: ["Published", "Awaiting", "Validated"]
    },
    description: String,
    condition: {
        type: String,
        enum: ["New with tags", "New without tags", "Very good", "Good", "Very used"]
    },
    size: {
        type: String,
        enum: ["36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42", "42.5", "43", "44", "44.5", "45", "46"]
    },
    lookingFor: String,
    picture: [String],
    price: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    { timestamps: true }
    );

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;