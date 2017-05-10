module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Todo", {
    text: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Todo;
};
