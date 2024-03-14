'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
         full_name: 'Lucas Pacheco Nunes',
        contact: '55 99990952',
        email: 'lucasnunes@dev.com.br'
      },
      {
         full_name: 'Cristian Pacheco Nunes',
        contact: '55 99999 9999',
        email: 'cristiannunes@gmail.com'
      },
      {
        full_name: 'Eloisa Pacheco Nunes',
        contact: '55 99990 9766',
        email: 'eloisanunes@gmail.com'
      },
      {
        full_name: 'Eli Fernando Marques Nunes',
        contact: '55 99948 484',
        email: 'elinunes@gmail.com'
      },
      {
        full_name: 'Julia Trindade Modernel',
        contact: '55 9839 19384',
        email: 'juliamodernel@gmail.com'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
