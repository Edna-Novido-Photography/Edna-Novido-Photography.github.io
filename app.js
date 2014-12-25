'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.aboutme',
    'myApp.version'
    //,'myApp.phoneCat'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/photography'});
}]).

controller('myAppCtrl', function($scope) {

    $scope.aboutme = "active";
    $scope.myFunction= function(path) {
        $scope.gallery = (path === "#/gallery" ? "active" : "");
        $scope.events = (path === "#/events" ? "active" : "");
        $scope.news = (path === "#/news" ? "active" : "");
        $scope.aboutme = (path === "#/aboutme" ? "active" : "");
        $scope.contact = (path === "#/contact" ? "active" : "");
    };
})
;
