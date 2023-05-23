/* eslint-disable @typescript-eslint/no-explicit-any */
import * as dotenv from 'dotenv'
import * as fs from 'fs'
dotenv.config()
import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import config from 'config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './utils/connectDB'
import todoRouter from './routes/todo.route'
import userRouter from './routes/user.route'
import authRouter from './routes/auth.route'

const app = express()

// Middleware

// Body Parser
app.use(express.json({ limit: '10kb' }))

// Cookie Parser
app.use(cookieParser())

// 3. Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
  app.use(
    morgan('common', {
      stream: fs.createWriteStream('./logs/access.log', { flags: 'a' })
    })
  )
}

// 4. Cors
app.use(
  cors({
    origin: config.get<string>('origin'),
    credentials: true
  })
)

// 5. Routes
app.use('/api/todos', todoRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

// Testing
app.get('/healthChecker', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to CodevoWeb😂😂👈👈'
  })
})

// UnKnown Routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any
  err.statusCode = 404
  next(err)
})

// Global Error Handler
app.use((err: any, req: Request, res: Response) => {
  err.status = err.status || 'error'
  err.statusCode = err.statusCode || 500

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  })
})

const port = config.get<number>('port')
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
  // 👇 call the connectDB function here
  connectDB()
})
