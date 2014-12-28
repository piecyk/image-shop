'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function cartCtrl() {
  var cart = this;
  
  //cart.cartList = {
  //key: {
  //image
  //count
  //};
  
  cart.add = function() {
  };

  cart.remove = function() {
  };
}
aModule.controller('cartCtrl', cartCtrl);
