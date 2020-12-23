const Joi = require('joi');

const { ErrorHandler, errors } = require('../../error');
const { userValidator } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const { id } = req.params;

        const { error } = Joi.validate(id, userValidator.checkUserId)

        if (error) {
            throw new ErrorHandler(errors.NOT_VALID_ID.massage, errors.NOT_VALID_ID.code);
        }
        next();
    } catch (e) {
        next(e);
    }
};
