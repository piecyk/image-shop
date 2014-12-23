'use strict';

var homeModule = require('./_index');


/**
 * @ngInject
 */
function cartCtrl() {
  var vm = this;

  vm.label = vm.label || '123';
  vm.cart = {};

  vm.add = function(id) {
    return id + 1;
  };

  vm.remove = function(id) {
    return id;
  };
}
homeModule.controller('cartCtrl', cartCtrl);
