let app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'login_controller'
    })
    .when('/wall', {
        templateUrl: 'partials/wall.html',
        controller: 'login_controller',
    })
    .otherwise('/login')

})
