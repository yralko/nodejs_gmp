import uuid from 'uuid/v1';
import sequelize from '../data-access/sequelize';

export const updateGroupService = async (id, name, permissions) => {
    const targetGroup = await sequelize.models.group.findOne({
        where: { id }
    })

    let updatedGroup = null;

    if (targetGroup) {
        updatedGroup = await sequelize.models.group.update(
            {
                name,
                permissions,
            },
            {where: { id }}
        ) 
    }
    
    return updatedGroup;
}

export const deleteGroupService = async id => {
    const deletedGroup = await sequelize.models.group.destroy(
        {where: { id }}
    )
    
    return deletedGroup;
}

export const createGroupService = async (permissions, name) => {
    const createdGroup = await sequelize.models.group.create({
        id: uuid(),
        name,
        permissions,
    });

    return createdGroup;
}

export const getGroupByIdService = async id => {
    
    const foundGroup = await sequelize.models.group.findOne({
        where: { id }
    });

    return foundGroup;
}