/*global angular */

'use strict';

describe('images:factory:mediaWikiFactory', function() {

  var mediaWikiFactory;
  var $httpBackend;
  var $rootScope;

  beforeEach(function() {
    angular.mock.module('is-images');
    angular.mock.inject(function(_$rootScope_, _$httpBackend_, _mediaWikiFactory_) {
      mediaWikiFactory = _mediaWikiFactory_.____unit();
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  it('should exist', function() {
    expect(mediaWikiFactory).to.exist();
  });

  it('should mediaWikiFactory query to exist an be a Function', function() {
    expect(mediaWikiFactory.query).to.exist();
    expect(mediaWikiFactory.query).to.be.a('Function');
  });

  it('should check function query with empty param and return empty array', function(done) {
    var promise = mediaWikiFactory.query().then(function(result) {
      expect(result).to.eql([]);
      done();
    });
    $rootScope.$digest();
    expect(promise).to.exist();
  });

  it('should check function query with test param and return empty array', function(done) {
    var query = 'test';

    $httpBackend
      .when('GET', /test/)
      .respond(getResponseHttpObj());

    mediaWikiFactory
      .query(query)
      .then(
        function(data) {
          expect(data).to.eql([]);
          expect(mediaWikiFactory.images).to.eql([]);

          done();
        });
    $httpBackend.flush();
  });


  it('should check function query with http 500 error', function(done) {
    var query = 'test';

    $httpBackend
      .when('GET', /test/)
      .respond(500, '');

    mediaWikiFactory
      .query(query)
      .then(
        function(data) {
          expect(data.status).to.eql(500);
          expect(mediaWikiFactory.images).to.eql(null);

          done();
        });
    $httpBackend.flush();
  });

  function getResponseHttpObj(images) {
    return {
      query: {
        allimages: images || []
      }
    };
  }

  it('should mediaWikiFactory querySuccess to exist an be a Function', function() {
    expect(mediaWikiFactory.querySuccess).to.exist();
    expect(mediaWikiFactory.querySuccess).to.be.a('Function');
  });

  it('should mediaWikiFactory queryError to exist an be a Function', function() {
    expect(mediaWikiFactory.queryError).to.exist();
    expect(mediaWikiFactory.queryError).to.be.a('Function');
  });

});