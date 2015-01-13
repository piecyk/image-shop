'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function infiniteScrollCtrl($window, $document, $scope) {
  var MAX_DISTANCE = 50;
  var infiniteScroll = this;

  infiniteScroll.attr = null;

  infiniteScroll.getPositions = function() {
    var element = $document[0].documentElement;
    return {
      scrollPosition: $window.pageYOffset,
      pageHeight: element.scrollHeight,
      clientHeight: element.clientHeight
    };
  };

  infiniteScroll.whenScrolled = function(event, attr) {
    var pos = infiniteScroll.getPositions();
    if (pos.pageHeight - (pos.scrollPosition + pos.clientHeight) < MAX_DISTANCE) {
      $scope.$apply(infiniteScroll.attr.whenScrolled);
    }
  };

}
aModule.controller('infiniteScrollCtrl', infiniteScrollCtrl);


/**
 * @ngInject
 */
function infiniteScrollDir($window, $document) {

  function link(scope, element, attr) {
    scope.infiniteScroll.attr = attr;

    angular.element($window).on('scroll', scope.infiniteScroll.whenScrolled);
    angular.element($document[0]).on('touchmove', scope.infiniteScroll.whenScrolled);

    scope.$on('$destroy', function() {
      angular.element($window).off('scroll', scope.infiniteScroll.whenScrolled);
      angular.element($document[0]).off('touchmove', scope.infiniteScroll.whenScrolled);
    });
  }

  return {
    restrict: 'A',
    bindToController: true,
    controller: 'infiniteScrollCtrl as infiniteScroll',
    link: link
  };
}
aModule.directive('infiniteScrollDir', infiniteScrollDir);
