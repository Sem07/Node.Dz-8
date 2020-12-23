const Joi = require('joi');

const { PASSWORD, EMAIL } = require('../../configs/regexp');

module.exports = Joi.object({
    email: Joi.string().trim().regex(EMAIL).required(),
    password: Joi.string().trim().regex(PASSWORD).required()
});
