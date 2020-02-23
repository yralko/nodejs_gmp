import { Request, Response } from 'express';
import { userAutosuggestService, getAllUsersService } from '../services/usersServices';

export const usersAutosuggestController = async (req: Request, res: Response) => {
  const { loginSubstring, limit } = req.query;

  const matchedUsers = await userAutosuggestService('login', loginSubstring, limit);

  if (matchedUsers) {
    res.status(200).send(matchedUsers)
  }
  
  return res.status(404).send('Users have not been found');
}

export const getAllUsersController = async (res: Response) => {
  const allUsers = await getAllUsersService();

  if (allUsers) {
    res.status(200).send(allUsers)
  }
  
  return res.status(404).send('Users have not been found');
}
