app.controller('login_controller', function($scope, login_factory){
    $scope.login = function(){
        login_factory.login($scope.new_user)
    }
})
