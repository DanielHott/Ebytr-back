const { Tarefas } = require("../models");

async function getTasks() {
  const allTasks = await Tarefas.findAll();
  if (!allTasks) return null;
  return allTasks;
}

async function createTasks(body) {
  const { descricao, status, prioridade } = body;
  const data = new Date();
  if (descricao && status && prioridade) {
  const allTasks = await Tarefas.create({
      descricao, status, data, prioridade
  });
  return allTasks;
}
  return null;
}

async function updateTasks(body) {
  const { id, descricao, status, prioridade } = body;
  const allTasks = await Tarefas.findOne({ where: { id }})
  const updatedtask = await allTasks.update({ descricao, status, prioridade });
  return updatedtask;
}

async function deleteTasks(body) {
  const { id } = body;
  const deletedTask = await Tarefas.destroy({ where: { id }})
  return deletedTask;
}

module.exports = {
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks,
  };
  