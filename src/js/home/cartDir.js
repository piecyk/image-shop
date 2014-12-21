'use strict';

var homeModule = require('./_index');


/**
 * @ngInject
 */
function cartDir() {
  //console.log('cartDir:fn');

  var link = function(scope) {
    console.log('cartDir:link:scope', scope.cart);    
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
