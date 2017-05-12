angular.module("App").directive("tutorlistDirective", function() {
    return {
        restrict: "E",
        templateUrl: "./views/tutorlistDirective.html",
        scope: {
            tutors: "="
        },
        link: function(scope, elem, attrs) {
            // console.log(scope.tutors);
            
        }
    }
})

