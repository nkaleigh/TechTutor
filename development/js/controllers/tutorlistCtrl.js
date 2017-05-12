angular.module("App").controller('tutorlistCtrl', function ($scope, tutorlistService, getAllTutors) {



  $scope.data = getAllTutors

})