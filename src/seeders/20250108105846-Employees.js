'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Employees', []);
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Employees', null, {});
     
  }
};
