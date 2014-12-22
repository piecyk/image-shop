'use strict';

var homeModule = require('./_index');
var R = require('ramda');

/**
 * @ngInject
 */
function homeClickDir() {

  var double = function(x) {
    return x * 2;
  };

  return {
    restrict: 'A',
    link: function($scope, $element) {
      $element.on('click', function() {
      });
    }
  };

}

homeModule.directive('homeClickDir', homeClickDir);
