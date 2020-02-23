const dotenv = require('dotenv');

const envFound = dotenv.config();

if (!envFound) {
  throw new Error('The .env file could not be found');
}

export default {
  PORT: parseInt(process.env.PORT, 10),
  POSTGRESS_DB: process.env.POSTGRESS_DB,
};
