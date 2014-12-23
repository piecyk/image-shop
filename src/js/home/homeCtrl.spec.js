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

});
