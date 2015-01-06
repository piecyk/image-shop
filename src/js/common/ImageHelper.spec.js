'use strict';

var ImageHelper = require('./ImageHelper');

describe('common:ImageHelper', function () {

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
    imageHelper.addToMap(images);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should dont add the same image', function (){
    imageHelper.addToMap(images).add(images[0]);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should dont remove image', function (){
    imageHelper.addToMap(images).remove(images[0]);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should remove image when removeFromMap: true', function (){
    imageHelper = ImageHelper.build({ removeFromMap: true }).addToMap(images);
    imageHelper.add(images[0]);
    imageHelper.remove(images[0]);
    expect(imageHelper.count()).to.eq(1);
  });

  it('should clear map', function (){
    imageHelper.addToMap(images).clearMap();
    expect(imageHelper.count()).to.eq(0);
  });

});
