
import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

//Express App
const app = express()
dotenv.config()

// Middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

//Routes
app.get('/', (req, res) => res.send('Brimsi backend!')) // API readiness probe

//Sever
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
