import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../controllers/todo.controller'

const router: Router = Router()

router.get('/todos', getTodos)

router.post('/todo', addTodo)

router.put('/todo/:id', updateTodo)

router.delete('/todo/:id', deleteTodo)

router.delete('/todos/completed', deleteCompletedTodos)

export default router
