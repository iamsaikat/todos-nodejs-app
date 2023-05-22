import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { collection: 'todos', timestamps: true } })
class TodoClass {
  @prop({ required: true })
  public title?: string

  @prop()
  public description?: string

  @prop({ default: true, required: true })
  public completed?: boolean
}

const TodoModel = getModelForClass(TodoClass)

export default TodoModel
