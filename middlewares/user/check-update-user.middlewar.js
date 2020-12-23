const Joi = require('joi');

const { ErrorHandler, errors } = require('../../error');
const { userValidator } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const user = req.body;

        const { error } = Joi.validate(user, userValidator.updateUserValidator);

        if (error) {
            throw new ErrorHandler(errors.NOT_VALID_BODY.massage, errors.NOT_VALID_BODY.code);
        }
        next();
    } catch (e) {
        next(e);
    }
};
