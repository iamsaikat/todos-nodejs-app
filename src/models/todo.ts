import { ITodo } from './../types/todo'
import { model, Schema } from 'mongoose'

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    completed: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
)

export default model<ITodo>('Todo', todoSchema)
