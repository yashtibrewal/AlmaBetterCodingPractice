
const express = require('express');
const tasksRouter = express.Router();

let tasks = [];
let id = 0;

function createTask(task) {
    id++;
    const createdTask = {
        id,
        task
    };
    tasks.push(createdTask);
    return createdTask;
}

function deleteTasks(id) {
    tasks = tasks.filter(task => task.id != id);
}

const getTasks = () => {
    return tasks;
}


tasksRouter.get('/', function (req, res) {
    const tasks = getTasks();
    res.json({
        "tasks": tasks
    });
});

tasksRouter.post('/', function (req, res) {
    const task = req.body;
    const { id } = createTask(task.name);
    res.status(201).json({
        "id": id
    });
});


tasksRouter.delete('/:task_id', function (req, res) {
    deleteTasks(req.params.task_id);
    res.sendStatus(200);
});

module.exports = tasksRouter;