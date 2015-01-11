/*global angular */

'use strict';

describe('app:config:Config', function() {

  var $compileProvider, $httpProvider, $stateProvider, $urlRouterProvider;

  beforeEach(function(done) {
    angular.mock.module('app', function (_$compileProvider_, _$httpProvider_, _$stateProvider_, _$urlRouterProvider_) {
      $compileProvider = _$compileProvider_;
      $httpProvider = _$httpProvider_;
      $stateProvider = _$stateProvider_;
      $urlRouterProvider = _$urlRouterProvider_;
      done();
    });
    angular.mock.inject(function() {});
  });

  it('should check that $compileProvider exists', function() {
    expect($compileProvider).to.exist();
  });

  it('should check that $httpProvider exists', function() {
    expect($httpProvider).to.exist();
  });

  it('should check that $stateProvider exists', function() {
    expect($stateProvider).to.exist();
  });

  it('should check that $urlRouterProvider exists', function() {
    expect($urlRouterProvider).to.exist();
  });

});
