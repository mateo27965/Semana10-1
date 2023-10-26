'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie.init({
    movie: DataTypes.STRING,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    email: DataTypes.STRING,
    ip_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};