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

    $scope.writetutorreview = function(review) {
        console.log('running function', review)
        tutorreviewService.writeTutorReview(review);
    }

    getTutor();
    getTutorReview();

    // getTutorForReview();


})