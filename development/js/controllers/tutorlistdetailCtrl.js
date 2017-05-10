angular.module("App").controller("tutorlistdetailCtrl", function ($scope, tutorlistService, tutorreviewService, $stateParams) {

    var getTutor = function () {
        $scope.data = tutorlistService.getSpecificData($stateParams.id);
        console.log("$stateParams", $stateParams)
        console.log("scope.data", $scope.data);
    }

    var getTutorReview = function () {
        console.log("stateParamsReview", $stateParams)
        console.log("scope.reviewdata", $scope.reviewdata);
        $scope.reviewdata = tutorreviewService.getTutorReview($stateParams.id);
        console.log("review", $scope.reviewdata);
    }

    // var getTutorForReview = function () {
    //     $scope.tutordata = tutorreviewService.getTutorForReview();
    // }

    // var writeTutorReview = function (review) {
    //     $scope.tutorreviewdata = tutorreviewService.writeTutorReview(review);
    // }

    getTutor();
    getTutorReview();
    // getTutorForReview();
    // writeTutorReview();

})