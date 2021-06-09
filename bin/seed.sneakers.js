require('../config/dbConnection');
const Sneaker = require('../models/Sneaker');

const sneakers = [
    {
      shoeName: "Nike LD Waffle Sacai Green Multi",
      brand: "Nike",
      silhoutte: "Nike LD Waffle",
      styleID: "BV0073-300", 
      retailPrice: 155,
      releaseDate: "2019-05-30",
      imageLinks: [""],
      thumbnail: "https://images.stockx.com/images/Nike-LD-Waffle-Sacai-Green-Multi-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1607650321",
      colorway: "Green/Multi",
      resellLinks:{
          stockX: "https://stockx.com/nike-ld-waffle-sacai-green-multi",
          goat: "http://www.goat.com/sneakers/sacai-x-ldv-waffle-green-tan-bv0073-300"
      },
      size: 42,
      lowestResellPrice:{
          stockX: 581,
          goat: 570
      },
      resellPrices:{
          stockX: {},
          goat: {}
      }
    }
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