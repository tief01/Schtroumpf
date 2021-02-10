import auth from './routes/authentifications.js'
import Schtroumpf from './routes/informations.js'
import { connect } from './db/connection.js'
import express from 'express'
import cors from 'cors'

// Initialisation
const PORT = 8080
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use('/auth', auth)
app.use('/Schtroumpf', Schtroumpf)

// connection
app.listen(PORT, () => {
    console.log(`Running server at port: ${PORT}...`)
    connect()
})