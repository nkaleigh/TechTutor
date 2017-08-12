angular.module('App').controller('signupCtrl', function($scope, tutorlistService) {
  $scope.signup = function(tutorsignupParam) {
     tutorlistService.signup(tutorsignupParam);
  }
});


