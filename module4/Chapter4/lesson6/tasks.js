
const express = require('express');
const errorHandler = require('./errorHandler');
const tasksRouter = express.Router();
// tasksRouter.use(errorHandler);


let tasks = [];
let id = 0;

function createTask(task) {
    id++;
    if (task.title == undefined) {
        throw new Error('Title missing.');
    }
    const createdTask = {
        id,
        'title': task.title
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
    res.status(200).json({
        "tasks": tasks
    });
});

tasksRouter.get('/retrieve/:id', function (req, res, next) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id == req.params.id);
    if (tasks.length == 0) {
        res.statusCode = 404;
        next(new Error(`${req.params.id} was not present.`));
    }
    res.json(tasks[0]);
});


tasksRouter.post('/add', function (req, res, next) {
    const task = req.body;
    let createdTask;
    try {
        createdTask = createTask(task);

    } catch (err) {
        res.status(422);
        next(err);
    }
    res.status(201).json(createdTask);
});

tasksRouter.put('/udpdate/:id', function (req, res, next) {
    const task = req.body;
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id != req.params.id);

    tasks = tasks.filter(task => task.id == req.params.id);
    if (tasks.length == 0) {
        res.statusCode = 400;
        throw new Error(`${req.params.id} was not present.`);
    }
    let updatedTask;
    try {
        updatedTask = createTask(task);

    } catch (err) {
        res.statusCode = 422;
        next(err);
    }
    res.status(200).json(updatedTask);
});



tasksRouter.delete('/:id', function (req, res) {
    deleteTasks(req.params.id);
    res.sendStatus(200);
});

module.exports = tasksRouter;