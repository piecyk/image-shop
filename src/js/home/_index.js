'use strict';

var angular = require('angular');

module.exports = angular.module('home', [
  'ui.router'
]);
angular.module('home').config(require('./homeRoutes'));

// Define the list
require('./homeCtrl');
require('./homeClickDir');

require('./cartDir');
require('./cartCtrl');
