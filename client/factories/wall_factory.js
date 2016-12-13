app.factory('wall_factory', function($http) {
    let factory = {};

    factory.post_message = function(message, cb) {
        $http.post('/post_message', message)
        cb()
    }

    factory.post_comment = function(comment, message_id, cb) {
        let comment_pkg = {
            comment: comment,
            message_id: message_id
        }
        $http.post('/post_comment', comment_pkg).then(function(output){
            cb()
        })
    }

    factory.get_all = function(cb) {
        $http.get('/get_all').then(function(output) {
            cb(output.data.messages)
        })
    }

    return factory;
})
