/*global angular */

'use strict';

describe('images:factory:imagesStore', function() {

  var $rootScope, imagesStore, dispatcher, mediaWikiFactory, $q;

  //TODO: load this proper
  var image = {
    'title': 'File:Onetaste logo.png',
    'sha1': '57e71f7136a53277073aaf5d5334e48531eb72b3',
    'mime': 'image\/jpeg'
  };

  beforeEach(function() {
    angular.mock.module('common', 'images');
    angular.mock.inject(function(_$rootScope_, _imagesStore_, _dispatcher_, _mediaWikiFactory_, _$q_) {
      $rootScope = _$rootScope_;
      imagesStore = _imagesStore_.____unit();
      dispatcher = _dispatcher_;
      mediaWikiFactory = _mediaWikiFactory_;
      $q = _$q_;
    });
    imagesStore.imageHelper.addToMap([image]);
  });

  it('should exist', function() {
    expect(imagesStore).to.exist();
  });

  it('count should be 0', function() {
    expect(imagesStore.count()).to.to.eql(1);
  });

  it('add an image', function() {
    dispatcher.dispatch('images:add', image);
    $rootScope.$digest();

    expect(imagesStore.map[image.sha1].title).to.eql(image.title);
    expect(imagesStore.count()).to.to.eql(1);
  });

  it('add an image and remove it', function() {
    dispatcher.dispatch('images:add', image);
    $rootScope.$digest();

    expect(imagesStore.map[image.sha1].title).to.eql(image.title);
    expect(imagesStore.count()).to.to.eql(1);

    dispatcher.dispatch('images:remove', image);
    $rootScope.$digest();

    expect(imagesStore.count()).to.eql(1);
  });

  it('should setConfigParams', function() {
    imagesStore.setConfigParams('test', {});

    expect(imagesStore.setConfigParams).to.exist();
    expect(imagesStore.query).to.eq('test');
  });

  it('should loadMore with query test', function() {
    var spy = sinon.spy(mediaWikiFactory, 'query');
    imagesStore.query = 'test';
    imagesStore.loadMore();

    expect(spy).to.have.been.calledWith({ aifrom: imagesStore.query});
  });

  it('should', function() {
    var spy = sinon.spy(mediaWikiFactory, 'query');
    imagesStore.loadMore();

    expect(spy).to.not.have.been.calledWith();
  });

  it('should', function() {
    var spy = sinon.spy(mediaWikiFactory, 'query');
    imagesStore.loading = true;
    imagesStore.load();

    expect(spy).to.have.callCount(0);
  });

  it('should check when we mediaWikiFactory.query is resolved', function(done) {
    sinon.stub(mediaWikiFactory, 'query').returns($q.when(getResponseHttpObj()));
    var params = { aifrom: 'test' };
    imagesStore.callQuery(params);
    $rootScope.$digest();

    expect(imagesStore.query).to.eq('test');
    done();
  });

  it('should check when we mediaWikiFactory.query is rejected', function(done) {
    sinon.stub(mediaWikiFactory, 'query').returns($q.reject('error'));
    var params = { aifrom: 'test' };
    imagesStore.callQuery(params);
    $rootScope.$digest();

    expect(imagesStore.query).to.eq(null);
    done();
  });


  function getResponseHttpObj(images) {
    return {
      query: {
        allimages: images || []
      }
    };
  }

});
