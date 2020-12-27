const mongoose = require('mongoose')

MONGODB_URL= "mongodb://127.0.0.1:27017/data"

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})