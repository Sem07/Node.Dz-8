const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../index');

class User_With_CarModel extends Model {
}

User_With_CarModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    }
}, { sequelize });

module.exports = User_With_CarModel;