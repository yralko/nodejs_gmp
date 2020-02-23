import express, { Request, Response } from 'express';
import { usersAutosuggestController, getAllUsersController } from '../controllers/users';

const usersRouter = express.Router();

usersRouter.get(
  '/allusers',
  (req: Request, res: Response) => getAllUsersController(res),
);

usersRouter.get(
  '/autosuggest', 
  (req: Request, res: Response) => usersAutosuggestController(req, res),
);

export default usersRouter;