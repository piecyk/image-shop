'use strict';

var homeModule = require('./_index');
var R = require('ramda');

/**
 * @ngInject
 */
function homeCtrl() {
  var home = this;
}
homeModule.controller('homeCtrl', homeCtrl);
