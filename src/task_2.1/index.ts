import express, { Request, Response, NextFunction } from 'express';
import uuid from 'uuid/v1';
import sortBy from 'lodash.sortby';
import UserModel from './models/UserModel';
import { PORT } from './constants';

const users: UserModel[] = [];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.param('id', (req: Request, res: Response, next: NextFunction, value) => {
    
    next();
});

app.get('/user/:id', (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user: UserModel = users.find(v => v.id === id && !v.isDeleted);

    if (user) {
        res.json(user);
    } else {
        res.status(400).json(`No user with id ${id} has been found`);
    }

    next();
})

app.post('/user/create', (req: Request, res: Response, next: NextFunction) => {
    const { login, password, age } = req.body;

    const isLoginExists = users.some(user => user.login === login);
    
    if (isLoginExists) {
        res.json(`User with login ${login} already exists`)
    } else {
        users.push(new UserModel(uuid(), login, password, age));

        res.json('User has been created');
    }
 
    

    next();
});

app.post('/user/update', (req: Request, res: Response, next: NextFunction) => {
    const {id, login, password, age } = req.body;

    const isUserExists = users.some(user => user.id === id && !user.isDeleted);

    if (!isUserExists) {
        res.status(400).json('No user has been found');
    } else {
        const userIndex = users.findIndex(v => v.id === id);
        const updatedUser = new UserModel(id, login, password, age);

        users[userIndex] = updatedUser;

        res.json(`User ${users[userIndex].login} has been modified`)
    }

    next();
});

app.post('/user/delete', (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;

    const isUserExists = users.some(user => user.id === id && !user.isDeleted);

    if (!isUserExists) {
        res.status(400).json('No user has been found');
    } else {
        const userIndex = users.findIndex(v => v.id === id);

        users[userIndex].isDeleted = true;

        res.json(`User ${users[userIndex].login} has been deleted`)
    }

    next();
});

app.get('/allusers', (req: Request, res: Response, next: NextFunction) => {
    res.json(users);
})

app.get('/autosuggest', (req: Request, res: Response, next: NextFunction) => {
    const {loginSubstring, limit} = req.query;

    const filteredUsers = users.filter(user => new RegExp(loginSubstring, 'i').test(user.login));
    const sortedUsers = sortBy(filteredUsers, ['login']);

    res.json(sortedUsers.slice(0, limit));
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
