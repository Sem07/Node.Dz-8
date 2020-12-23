const { O_AuthModel, UserModel } = require('../base/models');

module.exports = {
    createTokens: (tokens) => O_AuthModel.create(tokens),

    deleteByParams: (params) => O_AuthModel.destroy({
        where: params
    }),

    getTokensByParams: (params) => UserModel.findOne({
        include: {
            model: O_AuthModel,
            where: params
        }
    })
};
