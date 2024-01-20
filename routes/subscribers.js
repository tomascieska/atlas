const express = require('express')
const route = express.Router()
const Subscriber = require('../modules/subscriber')

// Get all
route.get('/', async (req, res) => {

    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// Get one
route.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Create one
route.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// Update one
route.patch('/:id', (req, res) => {

})
// Delete one
route.delete('/:id', (req, res) => {

})

module.exports = route