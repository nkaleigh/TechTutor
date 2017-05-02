angular.module("App").controller('homeCtrl', function($scope) {
   $scope.techTutor = 'TechTutor';
   $scope.enter = 'enter';
   $scope.testData = [{name: "Kaleigh Niemela", location: "Orem, Utah", img: "x", bio:"dev mountain student", rate: "free"}, {name: "Christopher Vosters", location: "Orem, Utah", img: "x", bio:"dev mountain student", rate: "$10"}]
});
