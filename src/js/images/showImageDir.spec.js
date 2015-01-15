/*global angular,helpers*/

'use strict';
var config = require('./../config');

describe('images:directive:showImageDir', function () {

  var element, $rootScope, $compile, $state, $httpBackend;

  function getResponseHttpObj() {
    return { query: { pages: { 'test': {'imageinfo': []} } } };
  }

  beforeEach(function(){
    angular.mock.module('ui.router', 'templates', 'images', function($compileProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
      config($compileProvider, $httpProvider, $stateProvider, $urlRouterProvider);
      $compileProvider.debugInfoEnabled(true);
    });
    angular.mock.inject(function(_$rootScope_, _$compile_, _$state_, _$httpBackend_) {
      $rootScope = _$rootScope_.$new();
      $compile = _$compile_;
      $state = _$state_;
      $httpBackend = _$httpBackend_;
    });
    $httpBackend.when('JSONP', /test/).respond(getResponseHttpObj());

    var html = '<div image-id="test" show-image-dir></div>';
    element = helpers.compileElem($compile, $rootScope, html);

    $httpBackend.flush();
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should check compile', function(done) {
    expect(element).to.exist();
    done();
  });

  it('should check showImage state template function', function(done) {
    $state.go('showImage');
    $rootScope.$digest();

    expect($state.current.template({id: 'test'})).to.eql('<div class="center-it" image-id="test" show-image-dir></div>');
    done();
  });

});
