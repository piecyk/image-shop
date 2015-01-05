'use strict';

var ImageHelper = require('./ImageHelper');

describe('common:Type', function () {

  var imageHelper;

  beforeEach(function() {
    imageHelper = ImageHelper.build();
  });

  it('should check exists', function (){
    expect(imageHelper).to.exist();
  });

  //TODO: load this proper
  var images = [{
    'title': 'File:Onetaste logo.png',
    'sha1': '57e71f7136a53277073aaf5d5334e48531eb72b1'
  }, {
    'title': 'File:Onetaste logo2.png',
    'sha1': '57e71f7136a53277073aaf5d5334e48531eb72b2'
  }];

  it('should check exists', function (){
    imageHelper.createMap(images);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should dont add the same image', function (){
    imageHelper.createMap(images);
    imageHelper.add(images[0]);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should dont remove image', function (){
    imageHelper.createMap(images);
    imageHelper.remove(images[0]);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should remove image when removeFromMap: true', function (){
    imageHelper = ImageHelper.build({ removeFromMap: true });
    imageHelper.createMap(images);
    imageHelper.add(images[0]);
    imageHelper.remove(images[0]);
    expect(imageHelper.count()).to.eq(1);
  });

});
