'use strict';

var FastClick = require('fastclick');


/**
 * @ngInject
 */
function Run($document) {
  FastClick($document.body);
}

module.exports = Run;
