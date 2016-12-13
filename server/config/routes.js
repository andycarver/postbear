const session = require('./../controllers/login_controller'),
    wall = require('./../controllers/wall_controller')

module.exports = function(app){
    app.post('/login', function(req, res){
        session.login(req, res)
    })
    app.get('/logout', function(req, res){
        session.logout(req, res)
    })
    app.get('/get_cur_user', function(req, res) {
        session.get_cur_user(req, res)
    })
    app.post('/post_message', function(req, res) {
        wall.post_message(req, res)
    })
    app.get('/get_all', function(req, res) {
        wall.get_all(req, res)
    })
    app.post('/post_comment', function(req, res) {
        wall.post_comment(req, res)
    })
}
