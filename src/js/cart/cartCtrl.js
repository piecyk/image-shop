'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function cartCtrl(cartStore) {
  var cart = this;
  cart.cartStore = cartStore;
}
aModule.controller('cartCtrl', cartCtrl);
