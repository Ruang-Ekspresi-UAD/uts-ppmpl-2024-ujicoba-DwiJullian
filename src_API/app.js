const express = require('express')
const app = express()
const port = 3000

const controller = require('./controller')

app.use(express.json())

// routes
app.get('/api/items', controller.getItems)

app.listen(port, () => {
    console.log(`API is running on http://${port}`)
})

module.exports = app