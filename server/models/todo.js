"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: {
            msg: "Please fill in your todo list!",
          },
          notEmpty: {
            msg: "Please fill in your todo list!",
          },
        },
      },
      isToggled: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Todo",
      hooks: {
        beforeCreate: (todo, options) => {
          todo.isToggled = false;
        },
      },
    }
  );
  return Todo;
};
