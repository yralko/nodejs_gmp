import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid/v1';
import sequelize from '../data-access/sequelize';


export const updateGroupController = (req: Request, res: Response) => {
    const { id, name, permissions } = req.body;

    sequelize.models.groups.findOne({
        where: { id }
    })
    .then((data: any) => {
        if (data) {
            return sequelize.models.groups.update(
                {
                    name,
                    permissions,
                },
                {where: { id }}
            )
                .then(() => res.send('Group has been updated'))
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

export const deleteGroupController = (req: Request, res: Response) => {
    const { id } = req.body;

    sequelize.models.groups.destroy(
        {where: { id }}
    )
    .then(() => res.send('User has been deleted'))
    .catch(err => {
        console.log(err);

        res.send('Database error');
    })
};

export const createGroupController = (req: Request, res: Response) => {
    const { permissions, name } = req.body;

    sequelize.models.groups.create({
        id: uuid(),
        name,
        permissions,
    })
    .then(() => res.send('Group has been created'))
    .catch(err => {
        console.log(err);

        res.send('Database error');
    })
};

export const getGroupByIdController = (req: Request, res: Response) => {
    const { id } = req.params;

    sequelize.models.groups.findOne({
        where: { id }
    })
    .then((data: any) => {
        if (data) {
            return res.send(data.dataValues);
        }

        res.send('The user has not been found');
    })
    .catch(err => {
        console.log(err);

        res.send('Database error');
    })
};
