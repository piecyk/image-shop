'use strict';

var angular = require('angular');

module.exports = angular.module('home', [
  'ui.router'
]);
angular.module('home').config(require('./homeRoutes'));

// Define the list
require('./homeCtrl.js');
require('./homeClickDir.js');

require('./cartDir.js');
require('./cartCtrl.js');
