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

const weatherAIScheama = new mongoose.Schema({
    town: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    }
})

const collection = new mongoose.model('weather', weatherAIScheama)

const data = {
    town: "Paris",
    temperature: 20
}

setInterval(() => {
    collection.insertMany(data)
}, 5000)


// Excepts JSON 
app.use(express.json())

// Routes
const subscribersRoutes = require('./routes/subscribers')
app.use('/subscribers', subscribersRoutes)

app.listen(PORT, () => {
    console.log(`Server is runing on PORT ${PORT}`)
})