'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function scrollToDir($window, $document) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {

      scope.whenScrolled = function(_srollTo, _pageHeight) {
        var scrolTo = _srollTo || $window.pageYOffset;
        var pageHeight = _pageHeight || $document[0].body.clientHeight;

        if ((pageHeight - scrolTo) < 500){
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
