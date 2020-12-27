const mongoose = require('mongoose')

// const dataSchema = new Schema({
    
// })

const Data = mongoose.model('Data', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number
    }
}))

module.exports = Data