const Joi = require('joi');

const { EMAIL, PASSWORD, LOGIN } = require('../../configs/regexp');

module.exports = Joi.object().keys({
    login: Joi.string().trim().regex(LOGIN).required(),
    email: Joi.string().trim().regex(EMAIL).required(),
    password: Joi.string().trim().regex(PASSWORD).required()
});
