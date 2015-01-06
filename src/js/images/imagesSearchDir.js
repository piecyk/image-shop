'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function imagesSearchDir() {
  return {
    restrict: 'A',
    replace: true,
    bindToController: true,
    controller: 'imagesSearchCtrl as search',
    templateUrl: 'js/images/imagesSearchDir.tpl.html',
    scope: {}
  };
}
aModule.directive('imagesSearchDir', imagesSearchDir);
