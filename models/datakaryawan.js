'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataKaryawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DataKaryawan.hasMany(models.DataKeluarga, { foreignKey: 'm_employee_id' });
    }
  }
  DataKaryawan.init({
    m_employee_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nama_karyawan: {
      type: DataTypes.STRING,
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
    },
    alamat: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    valid_form: {
      type: DataTypes.DATE,
      allowNull: false
    },
    valid_to: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'DataKaryawan',
  });
  return DataKaryawan;
};