const { CarModel } = require('../base/models');

module.exports = {
    getCars: () => CarModel().findAll(),

    getCarsByModel: (model) => CarModel.findAll({
        where: { model }
    }),

    createCar: (car) => CarModel.create(car),

    updateCar: (id, obj) => CarModel.update(
        { ...obj },
        { where: { id } }
    ),

    deleteCar: (id) => CarModel.destroy({
        where: { id }
    }),
    getCarById: (id) => CarModel.findOne({
        where: id
    }),
};
