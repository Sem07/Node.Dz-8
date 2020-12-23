const { UserModel, CarModel } = require('../base/models');

module.exports = {
    getUserById: (id) => CarModel.findAll({
        where: { users_id: id },
        include: [{ model: UserModel, as: 'user' }]
    }),

    getUsers: () => UserModel.findAll(),

    deletedUser: async (email) => {
        await UserModel.destroy({
            where: { email }
        });
    },

    createUser: (user) => UserModel.create(user),

    updateUser: (id, obj) => UserModel.update(
        { ...obj },
        { where: { id }, returning: true, plain: true }
    ),

    getUserByEmail: async (data) => {
        const user = await UserModel.findOne({
            where: data
        });
        return user && user.dataValues;
    },
};
