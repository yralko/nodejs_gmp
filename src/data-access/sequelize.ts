import { Sequelize } from 'sequelize';
import pg from 'pg';
import config from '../config';
import userModel from '../models/user';
import groupModel from '../models/group';


pg.defaults.ssl = true;

const sequelize = new Sequelize(
  config.POSTGRESS_DB,
  {
    dialect: 'postgres',
    dialectOptions: {
      "ssl": true
    },
    define: {
      timestamps: false
    },
  },
);

sequelize.define('user', userModel);
sequelize.define('groups', groupModel);

export default sequelize;
