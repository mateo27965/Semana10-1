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
      
      // poner relacion en sentido inverso de la pelicula hacia el director.
      // es el inverso de 1 a MUCHOS -> MUCHOS A 1
      // pais y directores es como que su apodo
      // la relación se va a llamar pais
      this.belongsTo(models.country,{as:'pais',foreignKey:'countryId'})
      // la relación se va a llamar directores
      this.belongsTo(models.director,{as:'directores',foreignKey:'directorId'})

    }
  }
  movie.init({
    title: DataTypes.STRING,
    genres: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};