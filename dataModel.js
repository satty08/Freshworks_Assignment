const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number
    }
})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data