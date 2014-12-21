'use strict';

/**
 * @ngInject
 */
function Routes($locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.when("/", [ "$state", function ($state) {
    $state.transitionTo("home", {}, false);
  } ]);
  
}

module.exports = Routes;
