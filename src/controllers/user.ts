import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid/v1';
import sequelize from '../data-access/sequelize';

export const updateUserController = (req: Request, res: Response) => {
    const { id, login, password, age } = req.body;

    sequelize.models.user.findOne({
        where: { id }
    })
    .then((data: any) => {
        if (data) {
            return sequelize.models.user.update(
                {
                    login,
                    password,
                    age,
                    isDeleted: false,
                },
                {where: { id }}
            )
                .then(() => res.send('User has been updated'))
                .catch(err => {
                    console.log(err);
            
                    res.send('Database error');
                });
        }

        res.send('User has not been found')
       
    })
    .catch(err => {
        console.log(err);

        res.send('Database error');
    })
};

export const deleteUserController = (req: Request, res: Response) => {
    const { id } = req.body;

    sequelize.models.user.update(
        {isDeleted: true},
        {where: { id }}
    )
    .then(() => res.send('User has been deleted'))
    .catch(err => {
        console.log(err);

        res.send('Database error');
    })
};

export const createUserController = (req: Request, res: Response) => {
    const { login, password, age } = req.body;

    sequelize.models.user.create({
        id: uuid(),
        password,
        login,
        age,
        isDeleted: false,
    })
    .then(() => res.send('User has been created'))
    .catch(err => {
        console.log(err);

        res.send('Database error');
    })
};

export const getUserByIdController = (req: Request, res: Response) => {
    const { id } = req.params;

    sequelize.models.user.findOne({
        where: { id }
    })
    .then((data: any) => {
        if (data && !data.dataValues.isDeleted) {
            return res.send(data.dataValues);
        }

        res.send('The user has not been found');
    })
    .catch(err => {
        console.log(err);

        res.send('Database error');
    })
};
