'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function cartCtrl(cartStore, $state) {
  var cart = this;

  cart.cartStore = cartStore;
  cart.formData = {};
  // hide error messages until 'submit' event
  cart.submitted = false;

  cart.processForm = function(form) {
    // show error messages on submit
    cart.submitted = true;

    if (!form.$valid) { return; }

    cart.formData.images = cartStore.map;
    cartStore.clear();
    $state.go('cart.status');
  };

  cart.goBackToSearch = function() {
    $state.go('search');
  };
}
aModule.controller('cartCtrl', cartCtrl);
