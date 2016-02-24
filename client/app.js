var myApp = angular.module('lunchline', ['ui.router', 'ui.bootstrap', 'mobile-angular-ui', 'ngMap'])
//UI router setup
.config(function ($stateProvider, $urlRouterProvider) {
   $stateProvider
   .state('home', {
      url: '/home',
      templateUrl: './app/listView/list.html'
   })
   .state('restView', {
      url: '/restView',
      templateUrl: './app/restView/rest.html',
      controller: 'restCtrl'
   })
   .state('errorView', {
      url: '/error',
      templateUrl: './err.html'
   })
})
.config(function($urlRouterProvider) {
   $urlRouterProvider.otherwise('/home');
});
