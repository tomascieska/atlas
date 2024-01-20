const express = require('express')
const route = express.Router()

// Get all
route.get('/', (req, res) => {
    res.send('Hello')
})
// Get one
route.get('/:id', (req, res) => {

})
// Create one
route.post('/', (req, res) => {

})
// Update one
route.patch('/:id', (req, res) => {

})
// Delete one
route.delete('/:id', (req, res) => {

})

module.exports = route