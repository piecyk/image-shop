'use strict';

var homeModule = require('./_index');


/**
 * @ngInject
 */
function cartDir() {

  var link = function(scope) {
  };

  return {
    restrict: 'A',
    templateUrl: 'js/home/cartDir.tpl.html',
    bindToController: true,
    controller: 'cartCtrl as cart',
    scope: {
      label: '@'
    },
    link: link
  };
}
homeModule.directive('cartDir', cartDir);
