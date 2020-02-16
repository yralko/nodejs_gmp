import sequelize from '../data-access/sequelize';


export const updateUserServices = (id, updatedUser) => {
    sequelize.models.user.findOne({
        where: { id }
    })
    .then((data: any) => {
        if (data) {
            return sequelize.models.user.update(
                updatedUser,
                {where: { id }}
            )
        }
    })
}