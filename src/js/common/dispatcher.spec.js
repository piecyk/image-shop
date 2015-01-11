/*global angular */

'use strict';

describe('common:factory:dispatcher', function() {

  var $rootScope, dispatcher;

  beforeEach(function() {
    angular.mock.module('common');
    angular.mock.inject(function(_$rootScope_, _dispatcher_) {
      $rootScope = _$rootScope_;
      dispatcher = _dispatcher_;
    });
  });

  it('should exist', function() {
    expect(dispatcher).to.exist();
  });

  it('should dont call rootScope on', function() {
    var spy = sinon.spy($rootScope, '$on');
    dispatcher.on(1, function() {});
    expect(spy).to.have.callCount(0);
  });
  
});
