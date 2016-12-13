app.controller('login_controller', function($scope, login_factory, $location){
    $scope.cur_user = null;

    login_factory.get_cur_user(function(data) {
        $scope.cur_user = data;
        if (!$scope.cur_user) {
            $location.url('/login')
        }
        else {
            $location.url('/wall')
        }
    })

    $scope.login = function(){
        if (!$scope.new_user) {
            alert('AHHHHHHHHHHHH')
        }
        else {
            login_factory.login($scope.new_user)
        }
    }
})
