'use strict';

var homeModule = require('./_index');


/**
 * @ngInject
 */
function cartDir() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'js/home/cartDir.tpl.html',
    bindToController: true,
    controller: 'cartCtrl as cart',
    scope: {}
  };
}
homeModule.directive('cartDir', cartDir);
