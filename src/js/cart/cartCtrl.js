'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function cartCtrl(cartStore, $state) {
  var cart = this;

  cart.cartStore = cartStore;
  cart.formData = {};

  cart.processForm = function() {
    $state.go('cart.status');
  };

  cart.goBackToSearch = function() {
    cartStore.clear();
    $state.go('search');
  }
}
aModule.controller('cartCtrl', cartCtrl);
