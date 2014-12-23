'use strict';

/**
 * @ngInject
 */
function homeRoutes($stateProvider) {

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
module.exports = homeRoutes;
