let mongoose = require('mongoose')

let bearSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

mongoose.model('Bear', bearSchema)
