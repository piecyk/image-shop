'use strict';

/**
 * @ngInject
 */
function Config($compileProvider, $httpProvider, $stateProvider, $urlRouterProvider) {

  // for debug angular.reloadWithDebugInfo();
  $compileProvider.debugInfoEnabled(false);

  // the following command will combine a group of short http calls to a single digest.
  $httpProvider.useApplyAsync(true);

  // go to root url
  $urlRouterProvider.otherwise('/')

  // routes
  $stateProvider
    .state('search', {
      url: '/',
      template: '<div images-search-dir></div>'
    })
    .state('cart', {
      url: '/cart',
      template: '<div cart-dir></div>'
    })

  ;

}

module.exports = Config;
