angular.module("App", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: './views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
           .state('about', {
               templateUrl: './views/about.html',
               controller: 'aboutCtrl',
               url: '/about'
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
          .state('review', {
              templateUrl: './views/review.html',
              controller: 'reviewCtrl',
              url: '/review'
          })
          .state('form', {
              templateUrl: './views/form.html',
              controller: 'formCtrl',
              url: '/form'
          })
 });
