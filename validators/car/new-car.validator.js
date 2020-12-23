const Joi = require('joi');

const { CURRENT_YEAR } = require('../../constants/constans');

module.exports = Joi.object().keys({
    model: Joi.string().trim().min(1).required(),
    price: Joi.number().min(250).trim().required(),
    year: Joi.number().min(CURRENT_YEAR - 150).max(CURRENT_YEAR).trim()
        .required()
});
