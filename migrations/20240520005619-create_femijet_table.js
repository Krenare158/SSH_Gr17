'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ap_femije', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nr_personal: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      contact: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      adresa: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nr_xhiro: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      aprovoj: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      che: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      english: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      maths: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      physics: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      resume: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      selected_option: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ap_femije');
  }
};
