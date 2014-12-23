/*global angular */

'use strict';

describe('images:factory:mediaWikiFactory', function() {

  var mediaWikiFactory;
  var $http;

  beforeEach(function() {
    angular.mock.module('is-images');
    angular.mock.inject(function(_$http_, _mediaWikiFactory_) {
      mediaWikiFactory = _mediaWikiFactory_;
      $http = _$http_;
    });
  });

  it('should exist', function() {
    expect(mediaWikiFactory).to.exist();
  });

  it('should check function query with empty param', function() {
    var promise = mediaWikiFactory.query();
    expect(promise).to.exist();
  });

});
