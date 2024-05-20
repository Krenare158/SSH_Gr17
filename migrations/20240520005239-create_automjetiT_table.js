'use strict';

module.exports = {async up(queryInterface, Sequelize) {
  await queryInterface.createTable('auto_regjistrim', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    auto_tipi: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    regjistrimi_ri: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    ndryshimi_pronarit: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    komuna: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    marka: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    motor_ccm: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
  });
}}
