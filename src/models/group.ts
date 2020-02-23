import { DataTypes } from 'sequelize';

const userModel = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  permissions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
}

export default userModel;