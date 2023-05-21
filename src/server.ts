import { app } from '../config/express'
import { logger } from '../config/logger'
import { Request, Response } from 'express'

logger.info('Working with Winston!')

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Todo API app working !' })
})

app.listen(8080, async () => {
  console.log('Server is running at http://localhost:8080')
})
