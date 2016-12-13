let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true})

mongoose.model('User', UserSchema)
