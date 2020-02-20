import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid/v1';
import sequelize from '../data-access/sequelize';
import {updateUserService, deleteUserService, createUserService, findUserService} from '../services/userServices'

export const updateUserController = async (req: Request, res: Response) => {
    const { id, login, password, age } = req.body;

    const userModel = {
        login,
        password,
        age,
        isDeleted: false,
    };

    const updatedUser = await updateUserService(id, userModel);

    if (updatedUser) {
        return res.status(200).send('User has been updated');
    }

    return res.status(404).send('User has not been found');
};

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.body;

    const deletedUser = await deleteUserService(id);

    if (deletedUser) {
        return res.status(200).send('User has been deleted');
    }

    return res.status(404).send('User has not been found');
};

export const createUserController = async (req: Request, res: Response) => {
    const { login, password, age } = req.body;

    const userModel = {
        id: uuid(),
        password,
        login,
        age,
        isDeleted: false,
    };

    const createdUser = await createUserService(userModel);

    if (createdUser) {
        return res.status(200).send('User has been created');
    }

    return res.status(404).send('User failed to create');

};

export const getUserByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;

    const foundUser = <{isDeleted: boolean}>await findUserService(id);

    
    if (foundUser && !foundUser.isDeleted) {
        return res.status(200).send(foundUser);
    }

    return res.status(404).send('User has not been found');
};
