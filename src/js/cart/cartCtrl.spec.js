/*global angular*/

'use strict';


describe('cart:ctrl:cartCtrl', function () {

  var ctrlFn, cartCtrl, $state, $rootScope;
  beforeEach(function (){
    angular.mock.module('ui.router', 'common', 'cart', function($stateProvider) {
      $stateProvider
        .state('search', {})
        .state('cart', { url: '/cart' })
        .state('cart.status', { url: '/status' });
    });
    angular.mock.inject(function($controller, _$state_, _$rootScope_) {
      ctrlFn = $controller('cartCtrl', {}, true);
      $state = _$state_;
      $rootScope = _$rootScope_;
    });
    cartCtrl = ctrlFn();
  });

  it('should exist', function() {
    expect(cartCtrl).to.exist();
  });

  it('should have a label variable equal to undefiend', function() {
    ctrlFn.instance.label = '123';
    cartCtrl = ctrlFn();
    expect(cartCtrl.label).to.eq('123');
  });

  it('should check processForm when form is valid', function() {
    var form = {
      '$valid': true
    };
    cartCtrl.processForm(form);
    $rootScope.$digest();

    expect($state.current.name).to.eq('cart.status');
  });

  it('should check processForm when form is invalid', function() {
    var form = {
      '$valid': false
    };
    cartCtrl.processForm(form);
    $rootScope.$digest();

    expect($state.current.name).to.eq('');
  });

  it('should check goBackToSearch', function() {
    cartCtrl.goBackToSearch();
    $rootScope.$digest();

    expect($state.current.name).to.eq('search');
  });

});
