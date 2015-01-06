'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider) {

  // TODO: fix gh-page dont work with this url
  // $locationProvider.html5Mode(true).hashPrefix("#");

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

module.exports = Routes;
