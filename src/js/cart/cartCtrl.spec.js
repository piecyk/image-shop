/*global angular*/

'use strict';


describe('cart:ctrl:cartCtrl', function () {

  var ctrlFn, cartCtrl;
  beforeEach(function (){
    angular.mock.module('common', 'cart');
    angular.mock.inject(function($controller) {
      ctrlFn = $controller('cartCtrl', {}, true);
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
});
