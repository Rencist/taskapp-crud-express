import { v4 as uuid } from 'uuid';

let tasks = [];

export const getTasks = (req, res) => {
  console.log(`Tasks in the database: ${tasks}`);

  res.send(tasks);
};

export const createTask = (req, res) => {
  const task = req.body;

  tasks.push({ ...task, id: uuid() });

  console.log(`Task [${task.taskname}] added to the database.`);
};

export const getTask = (req, res) => {
  res.send(req.params.id);
};

export const deleteTask = (req, res) => {
  console.log(`task with id ${req.params.id} has been deleted`);

  tasks = tasks.filter((task) => task.id !== req.params.id);
};

export const updateTask = (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);

  task.taskname = req.body.taskname;
  task.age = req.body.age;

  console.log(`taskname has been updated to ${req.body.taskname}.age has been updated to ${req.body.age}`);
};
