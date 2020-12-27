const express = require('express')
const dataRouter = require('./dataRouter')
require('./db')

const app = express()

app.use(express.json())
app.use(dataRouter)

module.exports = app