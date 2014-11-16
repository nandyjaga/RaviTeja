var rmipApp = angular.module('rmip', ['ngRoute','rmipControllers']);
rmipApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/common/login.html',
        controller: 'loginCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);  
  
    
