const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../index');

class UserModel extends Model {
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING
    }
}, { sequelize });

const O_Auth = require('./O_Auth');

UserModel.hasMany(O_Auth, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

module.exports = UserModel;
