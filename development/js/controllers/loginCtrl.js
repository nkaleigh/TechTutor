angular.module('App').controller('loginCtrl', function($scope, tutorlistService) {
    $scope.login = function(tutorObj) {
        console.log("tutorobj", tutorObj);
        tutorlistService.login(tutorObj)
        return ;
    }
})




