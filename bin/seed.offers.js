require('../config/dbConnection');
const Offer = require('../models/Offer');

const offers = [
    {
        title: 'Air Jordan 1 Union',
        id_sneaker: 'xxxxx',
        status: 'Published',
        description: 'Worn a few times, very good condition',
        condition: 'Very good',
        size: '38',
        lookingFor: ['Air Max 1/97 SW', 'Air Force 1 Travis'],
        picture: "http://www.lesitedelasneaker.com/wp-content/images/2018/10/union-air-jordan-1.jpg",
        price: '1500',
    },
    {
        title: 'Air Jordan 4 Union Guava',
        id_sneaker: 'yyyyy',
        status: 'Published',
        description: 'Brand new with tags and laces',
        condition: 'New with tags',
        size: '42',
        lookingFor: ['Air Jordan 4 Union Off Noir'],
        picture: "https://pbs.twimg.com/media/EhvcUOKVoAAfDyf.jpg:large",
        price: '800',
    },
];

async function insertOffers() {
    try {
      await Offer.deleteMany();
      const inserted = await Offer.insertMany(offers);
      console.log(
        `seed offers done : ${inserted.length} documents inserted in database !`
      );
    } catch (err) {
      console.error(err);
    }
  }
  
  insertOffers();