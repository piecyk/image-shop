/*global angular*/

'use strict';

var util = require('util');


var helpers = {

  log: function log(obj) {
    console.log(util.inspect(obj, {
      showHidden: true,
      colors: true,
      depth: null
    }));
  },

  /**
   * helper method for comile element in directive tests.
   * @param {} obj
   */
  compileElem: function($compile, $rootScope, html) {
    var element = angular.element(html);
    $compile(element)($rootScope);
    $rootScope.$digest();
    return element;
  }

};

module.exports = helpers;
