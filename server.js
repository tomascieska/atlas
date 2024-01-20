require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000


// Connect to the database
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Excepts JSON 
app.use(express.json())

// Routes
const subscribersRoutes = require('./routes/subscribers')
app.use('/subscribers', subscribersRoutes)

app.listen(PORT, () => {
    console.log(`Server is runing on PORT ${PORT}`)
})