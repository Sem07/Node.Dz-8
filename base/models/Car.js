const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../index');

class CarModel extends Model {
}

CarModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, { sequelize });

module.exports = CarModel;
