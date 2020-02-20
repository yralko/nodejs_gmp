import { Sequelize, DataTypes } from 'sequelize';
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
sequelize.define('group', groupModel);

sequelize.define('user_groups', {
  role: DataTypes.STRING
});

sequelize.models.group.belongsToMany(sequelize.models.user, { through: sequelize.models.user_groups });
sequelize.models.user.belongsToMany(sequelize.models.group, { through: sequelize.models.user_groups });


export default sequelize;
