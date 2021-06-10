const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema(
    {
    title: String,
    styleID: String,
    description: String,
    condition: {
        type: String,
        enum: ["new-with-tags", "new-without-tags", "very-good", "good", "very-used"]
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