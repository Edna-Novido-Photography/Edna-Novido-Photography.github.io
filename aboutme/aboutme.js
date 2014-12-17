'use strict';

angular.module('myApp.aboutme', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/aboutme', {templateUrl: 'aboutme/aboutme.html',controller: 'AboutMeCtrl'});
}])

    .controller('AboutMeCtrl', function ($scope) {
      $scope.myInterval = 2000;
      var slides = $scope.slides = [];
      $scope.addSlide = function() {
        var newWidth = slides.length + 1;
        slides.push({
          image: 'img/slides/' + newWidth + '.jpg',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Gorgeous', 'Cutify', 'Felines', 'Cutes'][slides.length % 4]
        });
      };
      for (var i=0; i<11; i++) {
        $scope.addSlide();
      }
    });