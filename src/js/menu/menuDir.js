'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function menuDir() {
  return {
    restrict: 'A',
    replace: true,
    bindToController: true,
    controller: 'menuCtrl as menu',
    templateUrl: 'js/menu/menuDir.tpl.html',
    scope: {}
  };
}
aModule.directive('menuDir', menuDir);


/**
 * @ngInject
 */
function menuCtrl(dispatcher, imagesStore, cartStore) {
  var menu = this;

  menu.imagesStore = imagesStore;
  menu.cartStore = cartStore;

  menu.queryChange = function(query) {
    dispatcher.dispatch('images:queryChange', query);
  };
}
aModule.controller('menuCtrl', menuCtrl);
