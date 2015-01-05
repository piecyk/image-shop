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
    scope: {
      list: '='
    }
  };
}
aModule.directive('imagesDir', imagesDir);
