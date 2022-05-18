const TasksServices = require('../services/TasksServices');

async function getTasks(_req, res) {
    try {
      const task = await TasksServices.getTasks();
      return res.status(200).json(task);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
};

async function createTask(req, res) {
  try {
    const tasks = await TasksServices.createTasks(req.body);
    return res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

async function updateTask(req, res) {
  try {
    const tasks = await TasksServices.updateTasks(req.body);
    return res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

async function deleteTask(req, res) {
  try {
    const tasks = await TasksServices.deleteTasks(req.body);
    return res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};


module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}