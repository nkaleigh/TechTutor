angular.module("App", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('about', {
                templateUrl: './views/about.html',
                controller: 'aboutCtrl',
                url: '/about'
            })
            .state('home', {
                templateUrl: './views/home.html',
                controller: 'homeCtrl',
                url: '/'
            })
            .state('login', {
                templateUrl: './views/login.html',
                controller: 'loginCtrl',
                url: '/login'
            })
            .state('review', {
                templateUrl: './views/review.html',
                controller: 'reviewCtrl',
                url: '/review'
            })
            .state('signup', {
                templateUrl: './views/signup.html',
                controller: 'signupCtrl',
                url: '/signup'
            })
            .state('signupform', {
                templateUrl: './views/signupform.html',
                controller: 'signupformCtrl',
                url: '/signupform'
            })
            .state('tutorlist', {
                templateUrl: './views/tutorlist.html',
                controller: 'tutorlistCtrl',
                url: '/tutorlist'
            })
            .state('tutorlistdetail', {
                templateUrl: './views/tutorlistdetail.html',
                controller: 'tutorlistdetailCtrl',
                url: '/tutorlist/:id'
            })


    });