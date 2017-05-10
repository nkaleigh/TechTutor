angular.module('App').controller('loginCtrl', function($scope, tutorlistService) {
    $scope.login = function(tutorObj) {
        console.log(tutorObj);
        tutorlistService.login(tutorObj)
        return ;
    }
})




