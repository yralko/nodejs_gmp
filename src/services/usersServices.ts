import sequelize from '../data-access/sequelize';
import { Sequelize } from 'sequelize';

const getMappedUsers = users => {
    let mappedUsers = [];

    if (users) {
      mappedUsers = users.map(user => user.dataValues);
    }

  return mappedUsers;
}

export const userAutosuggestService = async (column: string, substring: string, limit: number) => {
    const foundUsers: any[] = await sequelize.models.user.findAll(
        {
          where: {
            login: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col(column)), 'LIKE', '%' + substring + '%')
          },
          limit
        },
      );

      return getMappedUsers(foundUsers);
}

export const getAllUsersService = async () => {
    const allUsers = await sequelize.models.user.findAll()
    
    return getMappedUsers(allUsers);
}