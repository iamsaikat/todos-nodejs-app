import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo, deleteCompletedTodos } from '../controllers/todo.controller'
import { deserializeUser } from '../middleware/deserializeUser'
import { requireUser } from '../middleware/requireUser'

const router: Router = Router()

router.use(deserializeUser, requireUser)

router.get('/', getTodos)

router.post('/', addTodo)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

router.delete('/completed', deleteCompletedTodos)

export default router
