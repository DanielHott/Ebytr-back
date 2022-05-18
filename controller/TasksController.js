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

module.exports = {
    getTasks,
}