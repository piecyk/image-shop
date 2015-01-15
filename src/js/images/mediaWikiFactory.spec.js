/*global angular */

'use strict';

describe('images:factory:mediaWikiFactory', function() {

  var mediaWikiFactory;
  var $httpBackend;
  var $rootScope;

  beforeEach(function() {
    angular.mock.module('images');
    angular.mock.inject(function(_$rootScope_, _$httpBackend_, _mediaWikiFactory_) {
      mediaWikiFactory = _mediaWikiFactory_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  var params = {
    aifrom: 'test'
  };

  it('should exist', function() {
    expect(mediaWikiFactory).to.exist();
  });

  it('should mediaWikiFactory query to exist an be a Function', function() {
    expect(mediaWikiFactory.query).to.exist();
    expect(mediaWikiFactory.query).to.be.a('Function');
  });

  it('should check function query with empty param and return null', function(done) {
    var promise = mediaWikiFactory.query().then(function(data) {
      expect(data).to.eql(null);
      done();
    });
    $rootScope.$digest();
    expect(promise).to.exist();
  });

  it('should check function query with test param and return empty obj', function(done) {
    $httpBackend
      .when('JSONP', /test/)
      .respond({});

    mediaWikiFactory
      .getImage('test')
      .then(
        function(data) {
          expect(data).to.eql({});
          done();
        });
    $httpBackend.flush();
  });

  it('should check function getImage with test id and return empty array', function(done) {
    $httpBackend
      .when('JSONP', /test/)
      .respond(getResponseHttpObj());

    mediaWikiFactory
      .query(params)
      .then(
        function(data) {
          expect(data.query.allimages).to.eql([]);
          done();
        });
    $httpBackend.flush();
  });


  it('should check function query with http 500 error', function(done) {
    $httpBackend
      .when('JSONP', /test/)
      .respond(500, '');

    mediaWikiFactory
      .query(params)
      .then(
        function(response) {
          expect(response.status).to.eql(500);
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

});
