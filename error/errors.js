const { BAD_REQUEST, UNAUTHORIZED, FORBIDDEN } = require('../configs/status-codes');

module.exports = {
    NOT_VALID_ID: {
        massage: 'User id not valid',
        code: BAD_REQUEST
    },
    NOT_VALID_BODY: {
        massage: 'Wrong data',
        code: FORBIDDEN
    },
    USER_ALREADY_CREATED: {
        massage: 'User already created',
        code: UNAUTHORIZED
    },
    USER_NOT_CREATED: {
        massage: 'User not created',
        code: BAD_REQUEST
    },
    USER_EMAIL_SHORT: {
        massage: 'User email must > 0',
        code: BAD_REQUEST
    },
    WRONG_EMAIL_OR_PASS: {
        message: 'Email or password is not valid',
        code: BAD_REQUEST
    },
    NOT_VALID_CAR_MODEL: {
        massage: 'Car model not valid',
        code: BAD_REQUEST
    },
    CAR_NOT_CREATED: {
        massage: 'Car not created',
        code: BAD_REQUEST
    },
    NOT_VALID_TOKEN: {
        message: 'Not valid token',
        code: UNAUTHORIZED
    },
    PERMISSION_DENIED: {
        message: 'Permission denied',
        code: FORBIDDEN
    },
    TOO_BIG_FILE: {
        message: 'Too big file',
        code: BAD_REQUEST
    },
    WRONG_FILE_EXTENSION: {
        message: 'Wrong file extension',
        code: BAD_REQUEST
    },
    JUST_ONE_PHOTO: {
        message: 'You can upload just one photo as avatar',
        code: BAD_REQUEST
    },
};
