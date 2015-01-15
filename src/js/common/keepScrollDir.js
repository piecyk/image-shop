'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function keepScrollCtrl($window, $state, $timeout) {
  var keepScroll = this;

  keepScroll.savePosition = function() {
    if ($state.current.name) {
      keepScroll.scrollPositionCache[$state.current.name] = [$window.pageXOffset, $window.pageYOffset];
    }
  };

  keepScroll.restorePosition = function() {
    var prevPosition = keepScroll.scrollPositionCache[$state.current.name];
    if (prevPosition) {
      return $timeout(function() {
        $window.scrollTo(prevPosition[0], prevPosition[1]);
      }, 0);
    }
    return null;
  };

}
aModule.controller('keepScrollCtrl', keepScrollCtrl);


/**
 * @ngInject
 */
function keepScrollDir() {
  var scrollPositionCache = {};

  function link(scope) {
    scope.keepScroll.scrollPositionCache = scrollPositionCache;

    scope.$on('$stateChangeStart', scope.keepScroll.savePosition);
    scope.$on('$stateChangeSuccess', scope.keepScroll.restorePosition);
  }

  return {
    restrict: 'A',
    bindToController: true,
    controller: 'keepScrollCtrl as keepScroll',
    link: link,
    scope: {}
  };
}
aModule.directive('keepScrollDir', keepScrollDir);
