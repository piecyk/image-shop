/*global angular*/

'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function localStorage($window) {
  var self = this;

  self.set = function(key, value) {
    $window.localStorage[key] = angular.toJson(value);
  };

  self.get = function(key) {
    return angular.fromJson($window.localStorage[key]);
  };

  return self;
}
aModule.factory('localStorage', localStorage);
