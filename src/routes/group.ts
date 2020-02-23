
import express, { Request, Response, NextFunction } from 'express';
import { createValidator } from 'express-joi-validation'
import { updateGroupController, deleteGroupController, createGroupController, getGroupByIdController } from '../controllers/group';
import validation from '../services/validation';

const validator = createValidator()

const groupRouter = express.Router();

groupRouter.get(
    '/:id',
    (req: Request, res: Response) => getGroupByIdController(req, res),    
);

groupRouter.post(
    '/create',
    validator.body(validation.group.create),
    (req: Request, res: Response) => createGroupController(req, res),
);

groupRouter.post(
    '/update',
    validator.body(validation.group.update),
    (req: Request, res: Response) => updateGroupController(req, res),
);

groupRouter.delete(
    '/delete',
    (req: Request, res: Response) => deleteGroupController(req, res)
) ;


export default groupRouter;