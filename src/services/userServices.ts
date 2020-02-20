import sequelize from '../data-access/sequelize';

export const findUserService = async id => {
    const foundUser = await sequelize.models.user.findOne({
        where: { id },
    });

    return foundUser.get({ plain: true });
};


export const updateUserService = async (id, userModel) => {
    const foundUser = await findUserService(id);

    if (foundUser) {
        return sequelize.models.user.update(
            userModel,
            {where: { id }}
        )
    }

    return null;
}

export const deleteUserService = id => {
    return sequelize.models.user.update(
        {isDeleted: true},
        {where: { id }}
    )
};

export const createUserService = userModel => {
    return sequelize.models.user.create(userModel);
};
