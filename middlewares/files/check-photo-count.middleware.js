const { ErrorHandler, errors } = require('../../error');

module.exports = (req, res, next) => {
    if (req.docs.length) {
        throw new ErrorHandler(errors.JUST_ONE_PHOTO.message, errors.JUST_ONE_PHOTO.code);
    }

    if (req.photos.length > 1) {
        throw new ErrorHandler(errors.JUST_ONE_PHOTO.message, errors.JUST_ONE_PHOTO.code);
    }

    next();
};
