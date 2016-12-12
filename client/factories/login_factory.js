app.factory('login_factory', function($http){
    let factory = {};
    factory.login = function(new_user){
        $http.post('/login', new_user)
    }
    return factory
})
