const Joi = require('joi');

const { carValidator } = require('../../validators');
const { carServices } = require('../../serrvice');
const { ErrorHandler, errors } = require('../../error');

module.exports = {
    chekModelCar: (req, res, next) => {
        try {
            const { model } = req.params;

            const { error } = Joi.validate(model, carValidator.checkModelCar);

            if (error) {
                throw new ErrorHandler(errors.NOT_VALID_CAR_MODEL.massage, errors.NOT_VALID_CAR_MODEL.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },
    carValid: (req, res, next) => {
        try {
            const car = req.body;

            const { error } = Joi.validate(car, carValidator.newCar);

            if (error) {
                throw new ErrorHandler(errors.NOT_VALID_BODY.massage, errors.NOT_VALID_BODY.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },
    checkIdCar: (req, res, next) => {
        try {
            const { id } = req.params;

            const { error } = Joi.validate(id, carValidator.chekIdCar);

            if (error) {
                throw new ErrorHandler(errors.NOT_VALID_ID.massage, errors.NOT_VALID_ID.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },
    checkUpdateCar: (req, res, next) => {
        try {
            const car = req.body;

            const { error } = Joi.validate(car, carValidator.updateCar);

            if (error) {
                throw new ErrorHandler(errors.NOT_VALID_BODY.massage, errors.NOT_VALID_BODY.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },
    chekCarCreated: async (req, res, next) => {
        try {
            const { carId } = req.params;

            const user = await carServices.getCarById(carId);

            if (!user) {
                throw new ErrorHandler(errors.CAR_NOT_CREATED.massage, errors.CAR_NOT_CREATED.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    }
};
