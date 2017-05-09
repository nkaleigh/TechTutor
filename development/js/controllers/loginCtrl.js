angular.module('App').controller('loginCtrl', function($scope, mainService) {
    $scope.login = function() {
        tutorlistService.login()
    }
})