'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function imagesDir() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'js/images/imagesDir.tpl.html',
    bindToController: true,
    controller: 'imagesCtrl as images',
    scope: {},
    link: function($scope) {

      $scope.$on('$destroy', function handleDestroyEvent() {
        $scope.images.menuCtrlQueryChange();
      });
    }
  };
}
aModule.directive('imagesDir', imagesDir);
