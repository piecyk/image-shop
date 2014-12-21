'use strict';

/**
 * @ngInject
 */
function homeRoutes($stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'homeCtrl as home',
      templateUrl: 'js/home/homeView.tpl.html',
      onEnter: [ '$state', function($state) {
        console.log('onEnter', $state);
      } ]
    })
  ;

}
module.exports = homeRoutes;
