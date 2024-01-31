'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
        {
            nome: 'admin',
            email: 'admin@email.com',
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
        },
    ],
    {},
    );
},
  async down (queryInterface, Sequelize) {

  }
};
