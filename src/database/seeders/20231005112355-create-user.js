const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Vicente Ngonga',
          email: 'vicentegonga@gmail.com',
          password_hash: await bcryptjs.hash('1234567890', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Celestino Da Silva',
          email: 'celestinodasilva@gmail.com',
          password_hash: await bcryptjs.hash('1234567890', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Ivo hugo',
          email: 'ivohugo@gmail.com',
          password_hash: await bcryptjs.hash('1234567890', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Raul Adriano',
          email: 'rauladriano@gmail.com',
          password_hash: await bcryptjs.hash('1234567890', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
