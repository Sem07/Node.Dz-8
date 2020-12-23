const Joi = require('joi');

module.exports = Joi.object({
    model: Joi.number().integer().min(1)
});
