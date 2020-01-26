import express, { Request, Response } from 'express';
import { usersAutosuggestController, getAllUsersController } from '../controllers/users';

const usersRouter = express.Router();

usersRouter.get(
  '/allusers',
  getAllUsersController,
);

usersRouter.get(
  '/autosuggest', 
  (req: Request, res: Response) => usersAutosuggestController(req, res),
);

export default usersRouter;