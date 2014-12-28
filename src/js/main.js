'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');

require('./menu/_index');
require('./home/_index');
require('./images/_index');
require('./cart/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',

    'menu',
    'home',
    'images',
    'cart'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').config(require('./routes'));
  angular.module('app').run(require('./run'));

  angular.bootstrap(document, ['app']);

});
