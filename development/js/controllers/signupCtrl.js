angular.module('App').controller('signupCtrl', function($scope, tutorlistService) {
  $scope.signup = function(tutorsignupParam) {
      console.log("tutorsignupParam-Ctrl", tutorsignupParam);
     tutorlistService.signup(tutorsignupParam);
  }
});


