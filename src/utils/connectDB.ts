/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import config from 'config'

const dbUrl = `mongodb+srv://${config.get('dbUsername')}:${config.get(
  'dbPass'
)}@clusterdemo.ex0ag81.mongodb.net/${config.get('dbName')}?retryWrites=true&w=majority`

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log('Database connected...')
  } catch (error: any) {
    console.log(error.message)
    setTimeout(connectDB, 5000)
  }
}

export default connectDB
