'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataKeluarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataKeluarga.init({
    hubungan_keluarga: {
      type: DataTypes.STRING,
    },
    nama_anggota_keluarga: {
      type: DataTypes.STRING,
    },
    tanggal_lahir_anggota_keluarga: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'DataKeluarga',
  });
  return DataKeluarga;
};