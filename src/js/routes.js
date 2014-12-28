'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider) {

  // TODO: fix gh-page dont work with this url
  // $locationProvider.html5Mode(true).hashPrefix("#");
  
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl as home',
      templateUrl: 'js/home/homeView.tpl.html'
    })

    .state('cart', {
      url: '/cart',
      template: '<div cart-dir></div>'
    })

  ;
  
}

module.exports = Routes;
