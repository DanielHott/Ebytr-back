'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tarefas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      prioridade: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  }, 
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("Tarefas")
  }
}