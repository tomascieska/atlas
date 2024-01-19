const express = require('express')
const app = express()
const PORT = "https://atlas-test-jv09.onrender.com/"

app.get("/", (req,res) => {
    res.status(200).send("Hello world")

})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})