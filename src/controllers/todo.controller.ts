import { Response, Request } from 'express'
import TodoModel from '../models/todo.model'
import { ITodo } from '../types/todo'

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await TodoModel.find()
    res.status(200).json({
      message: 'All Todos List',
      data: todos,
      status: 'success'
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, 'title' | 'description' | 'completed'>

    const todo = new TodoModel({
      title: body.title,
      description: body.description,
      completed: body.completed
    })

    const newTodo = await todo.save()

    res.status(201).json({ message: 'Todo added', data: newTodo, status: 'success' })
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body
    } = req
    const updateTodo: ITodo | null = await TodoModel.findByIdAndUpdate({ _id: id }, body, { new: true })

    res.status(200).json({
      message: 'Todo updated',
      data: updateTodo,
      status: 'success'
    })
  } catch (error) {
    res.status(409).json({
      message: error
    })
  }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await TodoModel.findByIdAndRemove(req.params.id)

    res.status(200).json({
      message: 'Todo deleted',
      data: deletedTodo,
      status: 'success'
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteCompletedTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    await TodoModel.deleteMany({ completed: 'true' })
    const newTodos: ITodo[] = await TodoModel.find()

    res.status(200).json({
      message: 'Completed todos deleted',
      data: newTodos,
      status: 'success'
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo, deleteCompletedTodos }
