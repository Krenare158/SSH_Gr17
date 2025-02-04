'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ElectronicPassports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      request_type: {
        type: Sequelize.STRING
      },
      health_institution: {
        type: Sequelize.STRING
      },
      request_reason: {
        type: Sequelize.STRING
      },
      family_doctor: {
        type: Sequelize.STRING
      },
      consent: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ElectronicPassports');
  }
};
