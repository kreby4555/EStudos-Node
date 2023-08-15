const express = require('express')

const app = express()

const port = 2000

app.get('/users', (request, response) => {
    return response.send('Hello World')
})

app.listen(port)