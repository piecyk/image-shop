'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function scrollToDir($window, $document) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {

      scope.whenScrolled = function(_scrolTo, _pageHeight) {
        var scrolTo = _scrolTo || $window.pageYOffset;
        var pageHeight = _pageHeight || $document[0].body.clientHeight;

        //TODO: fix this magic number
        if ((pageHeight - scrolTo) < 650) {
          scope.$apply(attr.whenScrolled);
        }
      };

      angular.element($window).on('scroll', scope.whenScrolled);

      scope.$on('$destroy', function() {
        angular.element($window).off('scroll', scope.whenScrolled);
      });

    }
  };
}
aModule.directive('scrollToDir', scrollToDir);
