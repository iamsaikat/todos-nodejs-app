import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Express } from 'express'

const app: Express = express()

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// so we can get the client's IP address
app.enable('trust proxy')

export { app }
