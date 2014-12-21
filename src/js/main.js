'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./home/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    
    'home'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./appSettings'));
  angular.module('app').config(require('./routes'));

  angular.bootstrap(document, ['app']);
  
});
