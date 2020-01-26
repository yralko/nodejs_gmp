
import express, { Request, Response, NextFunction } from 'express';
import { createValidator } from 'express-joi-validation'
import { updateUserController, deleteUserController, createUserController, getUserByIdController } from '../controllers/user';
import { userCreateValidationSchema, userUpdateValidationSchema } from '../services/validation';

const validator = createValidator()

const userRouter = express.Router();

userRouter.get(
    '/:id',
    (req: Request, res: Response, next: NextFunction) => getUserByIdController(req, res),    
);

userRouter.post(
    '/create',
    validator.body(userCreateValidationSchema),
    (req: Request, res: Response, next: NextFunction) => createUserController(req, res),
);

userRouter.post(
    '/update',
    validator.body(userUpdateValidationSchema),
    (req: Request, res: Response) => updateUserController(req, res),
);

userRouter.post(
    '/delete',
    (req: Request, res: Response) => deleteUserController(req, res)
) ;


export default userRouter;