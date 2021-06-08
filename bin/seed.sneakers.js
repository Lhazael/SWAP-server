require('../config/dbConnection');
const Sneaker = require('../models/Sneaker');

const sneakers = [
    {
       model: "Sacai LD Waffle Green Gusto",
       brand: "Nike",
        sku: "BV0073-300",
        retailPrice: 160,
        releaseDate: "30-05-2019",
        image: [""],
    },
];

async function insertSneakers() {
    try {
      await Sneaker.deleteMany();
      const inserted = await Sneaker.insertMany(sneakers);
      console.log(
        `seed sneakers done : ${inserted.length} documents inserted in database !`
      );
    } catch (err) {
      console.error(err);
    }
  }
  
  insertSneakers();