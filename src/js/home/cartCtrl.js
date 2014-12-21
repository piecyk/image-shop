'use strict';

var homeModule = require('./_index');


/**
 * @ngInject
 */
function cartCtrl() {
  var vm = this;
  //console.log('cartCtrl', vm);

  vm.label = vm.label || '123';
  vm.cart = {};
  
  vm.add = function(id) {
    console.log(id);
  };
  
  vm.remove = function(id) {
    return id;    
  };
}
homeModule.controller('cartCtrl', cartCtrl);
