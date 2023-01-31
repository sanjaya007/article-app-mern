const express = require('express')
const { getUsers } = require('./handlers/userHandler')
const app = express()

app.get('/users', getUsers)

const port = 3000
app.listen(port, function(){
    console.log("Server listening on port " + port)
})