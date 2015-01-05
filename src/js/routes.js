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
      controllerAs: 'search',
      controller: ['imagesStore', function(imagesStore) {
        var search = this;
        search.imagesStore = imagesStore;
      }],
      template: '<div list="search.imagesStore.map" images-dir></div>'
    })

  //TODO: refactor cart
    .state('cart', {
      url: '/cart',
      template: '<div cart-dir></div>'
    })

  ;

}

module.exports = Routes;
