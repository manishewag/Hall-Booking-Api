import express from 'express'
import 'dotenv/config.js'// import dotenv from 'dotenv'
import routes from './src/routes/index.js'
// import mongoose from './src/model/index.js'// not support import 2 change

//dotenv.config()

const PORT = process.env.PORT  || 8000
const app = express()

app.use(express.json()) // put and post method come to body and change  to json
app.use(routes)



app.listen(PORT,()=>console.log(`server listening at port ${PORT}`))