import express from 'express'
import './database'


import router from './routes/index.routes'
const app = express()


app.use(express.json())
app.use(router)








app.listen(9000)