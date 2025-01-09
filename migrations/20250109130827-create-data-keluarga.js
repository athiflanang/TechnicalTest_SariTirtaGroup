'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DataKeluargas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hubungan_keluarga: {
        type: Sequelize.STRING
      },
      nama_anggota_keluarga: {
        type: Sequelize.STRING
      },
      tanggal_lahir_anggota_keluarga: {
        type: Sequelize.DATE
      },
      m_employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'DataKaryawans',
          key: 'm_employee_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DataKeluargas');
  }
};