angular.module("App").directive("tutorlistDirective", function() {
    return {
        restrict: "E",
        templateUrl: "./views/tutorlistFull.html",
        scope: {
            tutors: '='
        },
        link: function(scope, elem, attrs) {
            console.log(scope.tutor);
            
        }
    }
})

