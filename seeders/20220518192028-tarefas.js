'use strict'

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    queryInterface.bulkInsert("Tarefas", [
      {
        descricao: 'Lavar roupas',
        status: 'Executando',
        data: new Date(),
        prioridade: 'Urgente',
      },
      { 
        descricao: 'Guardar roupas',
        status: 'Não comecei',
        data: new Date(),
        prioridade: 'Sem urgencia',
      },
    ])
  }, 
  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete("Tarefas", null, {})
  }
}