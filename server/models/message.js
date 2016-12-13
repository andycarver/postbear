let mongoose = require('mongoose')

let MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    _user: {type: String, ref: 'User'}
}, {timestamps: true})

mongoose.model('Message', MessageSchema)
