'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function cartDir() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'js/cart/cartDir.tpl.html',
    bindToController: true,
    controller: 'cartCtrl as cart',
    scope: {}
  };
}
aModule.directive('cartDir', cartDir);
