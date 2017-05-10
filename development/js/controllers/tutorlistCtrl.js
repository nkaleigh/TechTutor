angular.module("App").controller('tutorlistCtrl', function ($scope, tutorlistService) {


  var getTutors = function () {
    console.log("data")
    $scope.data = tutorlistService.getData();
  }

  getTutors();

})