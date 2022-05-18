const { Tarefas } = require("../models");

async function getTasks() {
  const allTasks = await Tarefas.findAll();
  if (!allTasks) return null;
  return allTasks;
}

module.exports = {
    getTasks,
  };
  