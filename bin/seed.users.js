require('../config/dbConnection');
const User = require('../models/User');

const users = [
    {
        email: 'lisa@ih.fr',
        password: '9999',
        lastName: 'H',
        firstName: 'Lisa',
        username: 'LH1',

}];

async function insertUsers() {
    try {
      await User.deleteMany();
      const inserted = await User.insertMany(users);
      console.log(
        `seed users done : ${inserted.length} documents inserted in database !`
      );
    } catch (err) {
      console.error(err);
    }
  }
  
  insertUsers();