import 'reflect-metadata'
import express from 'express'

import './database/index'
import router from './routes/index'

const app = express()


app.use(express.json())
app.use(router)



app.listen(9000, ()=> { console.log('...')})