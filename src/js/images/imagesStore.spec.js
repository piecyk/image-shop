/*global angular */

'use strict';

describe('images:factory:imagesStore', function() {

  var $rootScope, imagesStore, dispatcher, mediaWikiFactory;

  beforeEach(function() {
    angular.mock.module('common', 'images');
    angular.mock.inject(function(_$rootScope_, _imagesStore_, _dispatcher_, _mediaWikiFactory_) {
      $rootScope = _$rootScope_;
      imagesStore = _imagesStore_.____unit();
      dispatcher = _dispatcher_;
      mediaWikiFactory = _mediaWikiFactory_;
    });
  });

  it('should exist', function() {
    expect(imagesStore).to.exist();
  });

  it('count should be 0', function() {
    expect(imagesStore.count()).to.to.eql(0);
  });

  //TODO: load this proper
  var image = {
    'title': 'File:Onetaste logo.png',
    'sha1': '57e71f7136a53277073aaf5d5334e48531eb72b3'
  };

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

    expect(imagesStore.count()).to.to.eql(1);
  });

});
