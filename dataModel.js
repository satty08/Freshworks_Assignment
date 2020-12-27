const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data