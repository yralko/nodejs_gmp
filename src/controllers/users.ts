import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import sequelize from '../data-access/sequelize';

export const usersAutosuggestController = (req: Request, res: Response) => {
  const { loginSubstring, limit } = req.query;

  sequelize.models.user.findAll(
    {
      where: {
        login: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('login')), 'LIKE', '%' + loginSubstring + '%')
      },
      limit
    },
  )
  .then((data: any) => {
    if (data) {
      const users = data.map(user => user.dataValues);

      return res.send(users);
    }

    res.send('No users have been found');
  })
  .catch(err => {
      console.log(err);

      res.send('Database error');
  })
}

export const getAllUsersController = (res: Response) => {
  sequelize.models.user.findAll()
    .then((data: any) => {
      if (data) {
        const users = data.map(user => user.dataValues);
  
        return res.send(users);
      }
  
      res.send('No users have been found');
  })
  .catch(err => {
    console.log(err);

    res.send('Database error');
  })
}
