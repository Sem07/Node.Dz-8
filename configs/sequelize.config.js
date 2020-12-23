const { DATABASE, PASSWORD_DB, USERNAME_DB } = require('./config');

module.exports = {
    development: {
        username: USERNAME_DB,
        password: PASSWORD_DB,
        database: DATABASE,
        host: '127.0.0.1',
        dialect: 'mysql'
    }
};
