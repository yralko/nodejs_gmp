import { Request, Response, NextFunction } from 'express';

import {updateGroupService, deleteGroupService, createGroupService, getGroupByIdService} from '../services/groupServices';


export const updateGroupController = async (req: Request, res: Response) => {
    const { id, name, permissions } = req.body;

    const updatedGroup = await updateGroupService(id, name, permissions);

    if (updatedGroup) {
        return res.status(200).send('Group has been updated');
    }

    return res.status(404).send('Group update failed');
};

export const deleteGroupController = async (req: Request, res: Response) => {
    const { id } = req.body;

    const deletedGroup = await deleteGroupService(id);

    if (deletedGroup) {
        return res.status(200).send('Group has been deleted');
    }

    return res.status(404).send('Group deletion failed');
};

export const createGroupController = async (req: Request, res: Response) => {
    const { permissions, name } = req.body;

    const createdGroup = await createGroupService(permissions, name);

    if (createdGroup) {
        return res.status(200).send('Group has been created');
    }

    return res.status(404).send('Group creation failed');

};

export const getGroupByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;

    const foundGroup = await getGroupByIdService(id);
    
    if (foundGroup) {
        return res.status(200).send(foundGroup);
    }

    return res.status(404).send('Group has not been found');
};
