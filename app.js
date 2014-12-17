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
        $scope.finearts = (path === "#/finearts" ? "active" : "");
        $scope.portraits = (path === "#/portraits" ? "active" : "");
        $scope.sports = (path === "#/sports" ? "active" : "");
        $scope.weddings = (path === "#/weddings" ? "active" : "");
        $scope.realEstate = (path === "#/realEstate" ? "active" : "");
        $scope.events = (path === "#/events" ? "active" : "");
        $scope.aboutme = (path === "#/aboutme" ? "active" : "");

    };
})
;
