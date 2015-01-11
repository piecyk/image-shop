/*global angular */

'use strict';

describe('cart:factory:cartStore', function() {

  var $rootScope, cartStore, dispatcher, localStorage;

  beforeEach(function() {
    angular.mock.module('common', 'cart');
    angular.mock.inject(function(_$rootScope_, _cartStore_, _dispatcher_, _localStorage_) {
      $rootScope = _$rootScope_;
      cartStore = _cartStore_.____unit();
      dispatcher = _dispatcher_;
      localStorage = _localStorage_;
    });
  });

  it('should exist', function() {
    expect(cartStore).to.exist();
  });

  //TODO: load this proper
  var image = {
    'title': 'File:Onetaste logo.png',
    'sha1': '57e71f7136a53277073aaf5d5334e48531eb72b3'
  };

  it('should check add', function() {
    cartStore.add(image);
    expect(cartStore.count()).to.eq(1);
  });

  it('should check remove', function() {
    cartStore.remove(image);
    expect(cartStore.count()).to.eq(0);
  });

  afterEach(function() {
    cartStore.clear();
  });

});
