angular.module("App").controller("signupformCtrl", function($scope, tutorlistService) {
  $scope.signupform = function(tutorsignupformInfo) {
      tutorlistService.signupform(tutorsignupformInfo);
  }
});