'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Students', []);
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Students', null, {});
     
  }
};
