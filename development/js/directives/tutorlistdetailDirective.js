angular.module("App").directive("tutorlistdetailDirective", function() {
    return {
        restrict: "E",
        templateUrl: "./views/tutorlistdetailDirective.html",
        scope: {
            tutor: "=",
            rd: "="
        },
        link: function (scope, elem, attrs) {
            console.log(scope.tutors);
        }
    }
})