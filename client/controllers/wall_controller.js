app.controller('wall_controller', function($scope, wall_factory) {

    wall_factory.get_all(function(messages) {
        $scope.messages = messages;
        console.log(messages)
    })

    $scope.post_comment = function(message_id) {
        wall_factory.post_comment($scope.new_comment, message_id, function() {
            wall_factory.get_all(function(messages) {
                $scope.messages = messages;
            })
        });
    }

    $scope.post_message = function() {
        wall_factory.post_message($scope.message, function() {
            wall_factory.get_all(function(messages) {
                $scope.messages = messages;
            })
        })
    }

})
