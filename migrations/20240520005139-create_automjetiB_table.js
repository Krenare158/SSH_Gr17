'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('autob', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vehicleType: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      ownerType: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      englishRegistration: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      mathsRegistration: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      personalNumber: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      registrationType: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      municipality: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      marka: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      engineCapacity: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('autob');
  }
};
