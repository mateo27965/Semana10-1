'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.movie,{foreignKey: 'countryId'})
      // 1 A MUCHOS
      this.hasMany(models.director, {foreignKey:'countryId'})
      

    }
  }
  country.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'country',
  });
  return country;
};