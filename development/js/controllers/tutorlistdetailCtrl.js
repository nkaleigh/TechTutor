angular.module("App").controller("tutorlistdetailCtrl", function($scope, tutorlistService, $stateParams) {

var getTutor = function() {
    $scope.data = tutorlistService.getSpecificData($stateParams.id); 
    console.log("$stateParams", $stateParams)
    console.log("scope.data", $scope.data);
}

// $scope.test = "testing";
getTutor();
})