require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const TasksController = require('./controller/TasksController');

app.use(express.json());

const PORT = process.env.PORT || 3010;

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*' )
    app.use(cors());
    next();
}) 

app.get('/tasks', TasksController.getTasks);

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})