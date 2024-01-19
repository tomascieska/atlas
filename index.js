const express = require('express')
const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    res.status(200).send("Hello world")
    res.end()
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})