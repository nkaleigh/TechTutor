angular.module("App").controller("tutorlistdetailCtrl", function ($scope, tutorlistService, tutorreviewService, $stateParams) {


    var getTutor = function () {
        $scope.data = tutorlistService.getSpecificTutor($stateParams.id).then(function(response){
            $scope.data = response[0];
        });
    };


    var getTutorReview = function () {
    tutorreviewService.getTutorReview($stateParams.id).then(function(response){
        $scope.reviewdata = response;
    });
    };

    $scope.writetutorreview = function(review) {
        review.tutorid = $stateParams.id;
        tutorreviewService.writeTutorReview(review).then(function(response){
        });
    };

    getTutor();
    getTutorReview();
    
});