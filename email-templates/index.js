const { ACTIVATE_USER_ACCOUNT, DELETE_USER } = require('../constants/emailAction.enum');

module.exports = {
    [ACTIVATE_USER_ACCOUNT]: {
        subject: 'Activate your account',
        templateFileName: 'activateAccount'
    },
    [DELETE_USER]: {
        subject: 'Delete account',
        templateFileName: 'deletUser'
    }
};
