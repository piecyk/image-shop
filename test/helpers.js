'use strict';

var util = require('util');

var helpers = {
  log: function log(obj) {
    console.log(util.inspect(obj, {
      showHidden: true,
      colors: true,
      depth: null
    }));
  }
};

module.exports = helpers;
