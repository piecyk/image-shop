/*global angular*/

'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function dispatcher($rootScope) {
  var self = this;

  self.dispatch = function(name, params) {
    $rootScope.$broadcast(name, { params: angular.copy(params) });
  };

  self.on = function(name, fn) {
    $rootScope.$on(name, function(event, args) {
      fn(angular.copy(args.params), event);
    });
  };

  return self;
}
aModule.factory('dispatcher', dispatcher);
