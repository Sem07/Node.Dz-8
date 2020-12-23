const { Router } = require('express');

const { carsController } = require('../../controllers');
const { carMiddlewares, filesMiddlewares } = require('../../middlewares');

const carRouter = Router();

carRouter.get('/', carsController.getAllCars);
carRouter.get('/:models',
    carMiddlewares.chekModelCar,
    carsController.getOneCarsByModel);
carRouter.post('/:user_id',
    carMiddlewares.carValid,
    filesMiddlewares.checkFileMiddleware,
    filesMiddlewares.checkFilesCountCar,
    carsController.createCar);
carRouter.put('/:student_id/:id',
    carMiddlewares.checkIdCar,
    carMiddlewares.chekCarCreated,
    carMiddlewares.checkUpdateCar,
    filesMiddlewares.checkFileMiddleware,
    filesMiddlewares.checkFilesCountCar,
    carsController.updateCar);
carRouter.delete('/:id', carMiddlewares.checkIdCar,
    carMiddlewares.chekCarCreated,
    carsController.deleteCar);

module.exports = carRouter;
