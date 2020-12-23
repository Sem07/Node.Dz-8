const { ErrorHandler, errors } = require('../../error');
const {
    DOC_MIMETYPES,
    MAX_DOC_SIZE,
    MAX_PHOTO_SIZE,
    PHOTO_MIMETYPES
} = require('../../constants/constans');

module.exports = (req, res, next) => {
    try {
        req.photos = [];
        req.docs = [];

        if (!req.files) {
            return next();
        }

        const files = Object.values(req.files);

        for (let i = 0; i < files.length; i++) {
            const { size, mimetype } = files[i];

            if (PHOTO_MIMETYPES.includes(mimetype)) {
                if (size > MAX_PHOTO_SIZE) {
                    throw new ErrorHandler(errors.TOO_BIG_FILE.message, errors.TOO_BIG_FILE.code);
                }
                req.photos.push(files[i]);
            } else if (DOC_MIMETYPES.includes(mimetype)) {
                if (size > MAX_DOC_SIZE) {
                    throw new ErrorHandler(errors.TOO_BIG_FILE.message, errors.TOO_BIG_FILE.code);
                }
                req.docs.push(files[i]);
            } else {
                throw new ErrorHandler(errors.WRONG_FILE_EXTENSION.message, errors.WRONG_FILE_EXTENSION.code);
            }
        }
        next();
    } catch (e) {
        next(e);
    }
};
