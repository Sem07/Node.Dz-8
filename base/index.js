const { Sequelize } = require('sequelize');

const { DATABASE, PASSWORD_DB, USERNAME_DB } = require('./config');

module.exports.sequelize = new Sequelize(DATABASE,
    USERNAME_DB,
    PASSWORD_DB, {
        host: 'localhost',
        dialect: 'mysql'
    });
