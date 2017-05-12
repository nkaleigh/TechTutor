angular.module("App").directive("reviewDirective", function () {
    return {
        restrict: "E",
        templateUrl: "./views/reviewDirective.html",
        scope: {
            writereview: '=',
            showhide: '=',
            tutor: "=",
        },
        link: function (scope, elem, attrs) {
            console.log("made it to the review directive");
            // console.log('rd', scope)

        }
    }
})