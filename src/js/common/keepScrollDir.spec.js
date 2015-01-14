/*global angular,helpers*/

'use strict';


describe('common:directive:keepScrollDir', function () {

  var $rootScope, $compile, element, $state, $window, $timeout;

  beforeEach(function (){
    angular.mock.module('ui.router', 'templates', 'common', function($stateProvider) {
      $stateProvider
        .state('search', {})
        .state('cart', {});
    });
    angular.mock.inject(function($controller, _$rootScope_, _$compile_, _$state_, _$window_, _$timeout_) {
      $rootScope = _$rootScope_.$new();
      $compile = _$compile_;
      $state = _$state_;
      $window = _$window_;
      $timeout = _$timeout_;
    });
    var html = '<div keep-scroll-dir></div>';
    element = helpers.compileElem($compile, $rootScope, html);

    $state.go('search');
    $rootScope.$digest();
  });

  it('should check compile', function(done) {
    var scope = element.isolateScope();
    expect(scope).to.exist();
    done();
  });

  it('should check scrollPositionCache', function(done) {
    var scope = element.isolateScope();

    $state.go('cart');
    $rootScope.$digest();

    expect(scope.keepScroll.scrollPositionCache).to.exist();
    done();
  });

  it('should check savePosition', function(done) {
    var scope = element.isolateScope();
    scope.keepScroll.savePosition();
    expect(scope.keepScroll.scrollPositionCache[$state.current.name]).to.exist();
    done();
  });

  it('should check restorePosition', function(done) {
    var spy = sinon.spy($window, 'scrollTo');
    var scope = element.isolateScope();

    scope.keepScroll.savePosition();
    var ret = scope.keepScroll.restorePosition();

    expect(ret).to.exist();
    $timeout.flush();

    expect(spy).to.have.callCount(1);
    done();
  });

  it('should check restorePosition return null', function(done) {
    var scope = element.isolateScope();
    var ret = scope.keepScroll.restorePosition();

    $timeout.flush();
    expect(ret).not.to.exist();
    done();
  });

});
