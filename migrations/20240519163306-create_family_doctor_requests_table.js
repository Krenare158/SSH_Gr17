'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('family_doctor_requests', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      request_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      health_institution: {
        type: Sequelize.STRING,
        allowNull: false
      },
      request_reason: {
        type: Sequelize.STRING,
        allowNull: false
      },
      family_doctor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      consent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('family_doctor_requests');
  }
};
