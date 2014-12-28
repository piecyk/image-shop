'use strict';

var homeModule = require('./_index');


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
homeModule.controller('cartCtrl', cartCtrl);
