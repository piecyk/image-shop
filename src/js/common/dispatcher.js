/*global angular*/

'use strict';

var aModule = require('./_index');
var R = require('ramda');
var Type = require('./type');

/**
 * @ngInject
 */
function dispatcher($rootScope) {
  var self = this;

  self.dispatch = function(name, params) {
    $rootScope.$broadcast(name, { params: angular.copy(params) });
  };

  self.on = function(name, fn) {
    if (!Type.of(name).is('string')) { return false; }

    $rootScope.$on(name, function(event, args) {
      fn(angular.copy(args.params), event);
    });

    return true;
  };

  return self;
}
aModule.factory('dispatcher', dispatcher);
