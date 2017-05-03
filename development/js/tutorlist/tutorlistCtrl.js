angular.module("App").controller('tutorlistCtrl', function ($scope, tutorlistService) {
    $scope.testData = function() {
        $scope.data = tutorlistService.getData();
    }

    $scope.testData();
})