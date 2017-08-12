angular.module('App').controller('loginCtrl', function($scope, tutorlistService) {
    $scope.login = function(tutorObj) {
        tutorlistService.login(tutorObj)
        return ;
    }
})




