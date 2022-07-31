"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Todos", "isToggled", {
      type: Sequelize.BOOLEAN,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Todos", "isToggled", {});
  },
};
