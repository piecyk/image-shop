'use strict';

var homeModule = require('./_index');
var R = require('ramda');

/**
 * @ngInject
 */
function homeCtrl() {
  var vm = this;

  vm.test = 123;
  vm.go = function(array) {

    var spacer = R.join(' ');
    return spacer(array);
  };
}
homeModule.controller('homeCtrl', homeCtrl);
