angular.module("App").directive("tutorlistdetailDirective", function() {
    return {
        restrict: "E",
        templateUrl: "./views/tutorlistdetailFull.html",
        scope: {
            tutor: "="
        },
        link: function (scope, elem, attrs) {
            console.log(scope.tutors);
        }
    }
})