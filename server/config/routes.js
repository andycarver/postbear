let session = require('./../controllers/login_controller')
module.exports = function(app){
    app.post('/login', function(req, res){
        session.login(req, res)
    })
}
