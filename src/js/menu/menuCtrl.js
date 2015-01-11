'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function menuCtrl(dispatcher, imagesStore, cartStore) {
  var menu = this;

  menu.imagesStore = imagesStore;

  cartStore.fromStorage();
  menu.cartStore = cartStore;

  menu.queryChange = function(query) {
    dispatcher.dispatch('images:queryChange', query);
  };
}
aModule.controller('menuCtrl', menuCtrl);
