import { Request, Response } from 'express';


export const usersAutosuggestController = (req: Request, res: Response) => {
  const { loginSubstring, limit } = req.query;

  const filteredUsers = users.filter(user => new RegExp(loginSubstring, 'i').test(user.login));
  const sortedUsers = sortBy(filteredUsers, ['login']);

  res.json(sortedUsers.slice(0, limit));
}

export const getAllUsersController = () => {
  res.json(users);
}
