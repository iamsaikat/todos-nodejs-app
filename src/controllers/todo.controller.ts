import { Response, Request } from 'express'
import Todo from '../models/todo'
import { ITodo } from '../types/todo'
import { logger } from '../config/logger'

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    logger.info('Get all todos called!')
    const todos: ITodo[] = await Todo.find()
    res.status(200).json({
      message: 'All Todos List',
      data: todos,
      status: 200
    })
  } catch (error) {
    res.status(500).send(error)
    logger.error('An error occurred: ' + error)
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, 'title' | 'description' | 'completed'>
    logger.info(`Add todo called with Title ${body.title} !`)

    const todo: ITodo = new Todo({
      title: body.title,
      description: body.description,
      completed: body.completed
    })

    const newTodo: ITodo = await todo.save()

    res.status(201).json({ message: 'Todo added', data: newTodo, status: 201 })
  } catch (error) {
    res.status(500).send(error)
    logger.error('An error occurred: ' + error)
  }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    logger.info(`Update todo id-${req.params.id} called!`)
    const {
      params: { id },
      body
    } = req
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate({ _id: id }, body)

    res.status(200).json({
      message: 'Todo updated',
      data: updateTodo,
      status: 200
    })
  } catch (error) {
    logger.error('An error occurred: ' + error)
    res.status(409).json({
      message: error
    })
  }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    logger.info(`Delete todo id-${req.params.id} called!`)
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(req.params.id)

    res.status(200).json({
      message: 'Todo deleted',
      data: deletedTodo,
      status: 200
    })
  } catch (error) {
    res.status(500).send(error)
    logger.error('An error occurred: ' + error)
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo }
