'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./home/_index');
require('./images/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',

    'home',
    'is-images'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').config(require('./routes'));
  angular.module('app').run(require('./run'));

  angular.bootstrap(document, ['app']);

});
