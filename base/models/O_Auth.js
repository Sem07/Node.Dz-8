const { Model, DataTypes, Sequelize } = require('sequelize');

const { sequelize } = require('../index');

class O_AuthModel extends Model {
}

O_AuthModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false
    }
}, { sequelize });

const User = require('./User');

O_AuthModel.belongsTo(User, { foreignKey: 'user_id' });

module.exports = O_AuthModel;
