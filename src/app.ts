import express, { Express } from 'express'
import { logger } from './config/logger'
import { Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import todoRouter from './routes/todo.router'
import bodyParser from 'body-parser'

const app: Express = express()

logger.info('Working with Winston!')

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/', todoRouter)

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Todo API app working !' })
})

// replace the host "clusterdemo.ex0ag81.mongodb.net" with the address of your host generated in MongoDB Atlas.
// https://docs.mongodb.com/manual/reference/connection-string/
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clusterdemo.ex0ag81.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((error) => {
    throw error
  })
