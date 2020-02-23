import { DataTypes } from 'sequelize';

const userModel = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
  }
}

export default userModel;