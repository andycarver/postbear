const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Message = mongoose.model('Message'),
    Comment = mongoose.model('Comment');

module.exports = (function() {
    return {
        post_message: function(req, res) {
            User.findOne({_id: req.session.user._id}, function(err, user) {
                let new_message = new Message(req.body);
                new_message._user = user.name;
                new_message.save()
                res.send('okaygreat!')
            })
        },
        post_comment: function(req, res) {
            User.findOne({_id: req.session.user._id}, function(err, user) {
                Message.findOne({_id: req.body.message_id}, function(err, message) {
                    let new_comment = new Comment(req.body.comment);
                    new_comment._user = user.name;
                    new_comment._message = message._id;
                    new_comment.save()
                    message.comments.push(new_comment);
                    message.save()
                    res.send('okaygreat!')
                })
            })
        },
        get_all: function(req, res) {
            Message.find({}, false, true).populate('comments').exec(function(err, messages) {
                if (err) { console.log('oh shit'); }
                res.json({ messages });
            })
        }
    }
})()
