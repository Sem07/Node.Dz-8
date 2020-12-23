module.exports = {
    checkId: require('./chek-user-id.middleware'),
    checkIsUserCreated: require('./check-is-user-created.middlewar'),
    chekUserBeforeDeleted: require('./chek-user-before-deleted'),
    checkUserById: require('./check-is-user-created-by-id.middlewar'),
    checkUserValid: require('./chek-user-valid.middleware'),
    checkUpdateUser: require('./check-update-user.middlewar')
};
