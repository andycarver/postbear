app.factory('login_factory', function($http, $location){
    let factory = {};

    factory.login = function(new_user){
        $http.post('/login', new_user).then(function(output) {
            if (output.data.status) {
                $location.url('/wall')
            }
        });
    }

    factory.get_cur_user = function(cb) {
        $http.get('/get_cur_user').then(function(output) {
            cb(output.data);
        })
    }

    return factory;
})
