import { Request, Response, NextFunction } from 'express';


export const updateUserController = (req: Request, res: Response) => {
    const { id, login, password, age } = req.body;

    // const isUserExists = users.some(user => user.id === id && !user.isDeleted);

    // if (!isUserExists) {
    //     res.status(400).json('No user has been found');
    // } else {
    //     const userIndex = users.findIndex(v => v.id === id);
    //     const updatedUser = new UserModel(id, login, password, age);

    //     users[userIndex] = updatedUser;

    //     res.json(`User ${users[userIndex].login} has been modified`);
    // }
};

export const deleteUserController = (req: Request, res: Response, next: NextFunction) => {
    // const { id } = req.body;

    // const isUserExists = users.some(user => user.id === id && !user.isDeleted);

    // if (!isUserExists) {
    //     res.status(400).json('No user has been found');
    // } else {
    //     const userIndex = users.findIndex(v => v.id === id);

    //     users[userIndex].isDeleted = true;

    //     res.json(`User ${users[userIndex].login} has been deleted`);
    // }
};

export const createUserController = (req: Request, res: Response, next: NextFunction) => {
    // const { login, password, age } = req.body;

    // const isLoginExists = users.some(user => user.login === login);

    // if (isLoginExists) {
    //     res.json(`User with login ${login} already exists`);
    // } else {
    //     users.push(new UserModel(uuid(), login, password, age));

    //     res.json('User has been created');
    // }
};

export const getUserByIdController = (req: Request, res: Response, next: NextFunction) => {
    // const { id } = req.params;
    // const user: UserModel = users.find(v => v.id === id && !v.isDeleted);

    // if (user) {
    //     res.json(user);
    // } else {
    //     res.status(400).json(`No user with id ${id} has been found`);
    // }
};

