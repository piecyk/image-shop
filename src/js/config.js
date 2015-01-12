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
  $urlRouterProvider.otherwise('/');

  // routes
  $stateProvider

  // images search view
    .state('search', {
      url: '/',
      template: '<div images-search-dir></div>'
    })

  // cart checkout wizard
    .state('cart', {
      abstract: true,
      url: '/cart',
      template: '<div cart-dir></div>'
    })

  // nested states
  // each of these sections will have their own view

   .state('cart.list', {
      url: '/list',
      template: '<div list="cart.cartStore.map" type="cart" images-dir></div>'
    })

  // url will be /cart/payment
    .state('cart.payment', {
      url: '/payment',
      templateUrl: 'js/cart/cartFormPayment.tpl.html'
    })

  // url will be /cart/status
    .state('cart.status', {
      url: '/status',
      templateUrl: 'js/cart/cartFormStatus.tpl.html'
    })
  ;
}

module.exports = Config;
