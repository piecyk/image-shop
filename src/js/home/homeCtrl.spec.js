/*global angular*/

'use strict';

describe('home:ctrl:homeCtrl', function () {

  var HomeCtrl;
  beforeEach(function (){
    angular.mock.module('home');
    angular.mock.inject(function($controller) {
      HomeCtrl = $controller('homeCtrl');
    });
  });

  it('should exist', function() {
    expect(HomeCtrl).to.exist();
  });

  it('should have a number variable equal to 1234', function() {
    expect(HomeCtrl.test).to.eq(123);
  });

  it('should space [1, 2] to 1 2', function() {
    expect(HomeCtrl.go([1, 2])).to.eq('1 2');
  });

});
