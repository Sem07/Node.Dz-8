const { Model, DataTypes, Sequelize } = require('sequelize');

const { sequelize } = require('../index');

class Cars_FilesModel extends Model {
}

Cars_FilesModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    file: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false
    }
}, { sequelize });

const CarModel = require('./Car');

Cars_FilesModel.belongsTo(CarModel, { foreignKey: 'car_id' });

module.exports = Cars_FilesModel;
