const Joi = require('joi');

const { PASSWORD, LOGIN } = require('../../configs/regexp');

module.exports = Joi.object({
    login: Joi.string().regex(LOGIN),
    password: Joi.string().regex(PASSWORD)
});
