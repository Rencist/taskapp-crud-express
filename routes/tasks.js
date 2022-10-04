import express from 'express';

import { getTasks, createTask, getTask, deleteTask, updateTask } from '../controllers/tasks.js';

const router = express.Router();

router.get('/', getTasks);

router.post('/', createTask);

router.get('/:id', getTask);

router.delete('/:id', deleteTask);

router.patch('/:id', updateTask);

export default router;
