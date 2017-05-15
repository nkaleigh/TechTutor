angular.module("App").controller("tutorlistdetailCtrl", function ($scope, tutorlistService, tutorreviewService, $stateParams) {

    var getTutor = function () {
        $scope.data = tutorlistService.getSpecificTutor($stateParams.id).then(function(response){
            $scope.data = response[0];
        });
    }


        var getTutorReview = function () {
        console.log("stateParamsReview", $stateParams)
        console.log("scope.reviewdata", $scope.reviewdata);
        tutorreviewService.getTutorReview($stateParams.id).then(function(response){
            console.log("response", response);
            $scope.reviewdata = response;
        console.log("review", $scope.reviewdata);
        })
        }

    $scope.writetutorreview = function(review) {
        console.log('running function', review)
        review.tutorid = $stateParams.id;
        tutorreviewService.writeTutorReview(review).then(function(response){
        })
    }

    getTutor();
    getTutorReview();
    
})