module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('User', [{
            login: 'Max',
            email: 'Max@gmail.com',
            password: '123456'
        }]);
        await queryInterface.bulkInsert('Car', [{
            model: 'BMW',
            price: 20500,
            year: 2007,
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('user', null, {});
        await queryInterface.bulkDelete('car', null, {});
    }
};
