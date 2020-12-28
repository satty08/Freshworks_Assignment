const express = require('express')
const router = new express.Router()
const Data = require('./dataModel')

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/data',  async (req, res) => {
    const data = new Data(req.body)
    
    try {
        await data.save()
        res.status(201).send(data)
    } catch (error) {
        res.status(400).send(error)
    }

})

router.get('/data/:id', async(req, res) => {
    const _id = req.params.id

    try {
        const dataByID = await Data.findById(_id)

        if (!dataByID) {
            res.status(400).send()
        }

        res.status(201).send(dataByID)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/data/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const dataByID = await Data.findById(_id)

        if (!dataByID) {
            res.status(400).send()
        }

        await dataByID.remove()
        res.send(dataByID)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router