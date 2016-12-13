let mongoose = require('mongoose')

let CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    _message: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'},
    _user: {type: String, ref: 'User'}
}, {timestamps: true})

mongoose.model('Comment', CommentSchema)
