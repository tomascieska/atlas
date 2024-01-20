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
route.get('/:id', getSubscriber,(req, res) => {
    res.json(res.subscriber)
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
route.patch('/:id', getSubscriber, async (req, res) => {
    if(req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null){
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }

    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch(err){
        res.status(400).json({message: err.message})
    }
})

// Delete one
route.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.deleteOne()
        res.json({message: "subscriber deleted"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})

async function getSubscriber (req, res, next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null){
            return res.status(404).json({message: 'Can not find the subcriber'})
        } 
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    res.subscriber = subscriber
    next()
}


module.exports = route