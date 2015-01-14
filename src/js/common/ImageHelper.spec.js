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

  it('should check when adding to map nothing', function (){
    imageHelper.addToMap();
    expect(imageHelper.count()).to.eq(0);
  });

  //TODO: load this proper
  var images = [{
    'title': 'File:Onetaste logo.png',
    'sha1': '57e71f7136a53277073aaf5d5334e48531eb72b1',
    'mime': 'image\/jpeg'
  }, {
    'title': 'File:Onetaste logo2.png',
    'sha1': '57e71f7136a53277073aaf5d5334e48531eb72b2',
    'mime': 'image\/jpeg'
  },{
    'title': 'File:Onetaste logo3.png',
    'sha1': '57e71f7136a53277073aaf5d5334e48531eb72b2',
    'mime': 'image\/gif'
  }];

  it('should check add to map', function (){
    imageHelper.addToMap(images);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should dont add the same image', function (){
    imageHelper.addToMap(images).add(images[0]);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should add image if not in map', function (){
    imageHelper = ImageHelper.build({ addIfNotInMap: true }).add(images[0]);
    expect(imageHelper.count()).to.eq(1);
  });

  it('should dont add image if not in map', function (){
    imageHelper = ImageHelper.build().add(images[0]);
    expect(imageHelper.count()).to.eq(0);
  });

  it('should dont remove image', function (){
    imageHelper.addToMap(images).remove(images[0]);
    expect(imageHelper.count()).to.eq(2);
  });

  it('should dont remove image if not in map', function (){
    imageHelper = ImageHelper.build({ addIfNotInMap: true }).add(images[0]);
    imageHelper.remove(images[1]);
    expect(imageHelper.count()).to.eq(1);
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

  it('should add image when addIfNotInMap: true', function (){
    imageHelper = ImageHelper.build({ addIfNotInMap: true });
    expect(imageHelper.count()).to.eq(0);
    imageHelper.add(images[0]);
    expect(imageHelper.count()).to.eq(1);
  });

  it('should getPrice at least 0', function (){
    imageHelper = ImageHelper.build().addToMap(images).add(images[0]);
    expect(imageHelper.getPrice()).to.be.at.least(0);
  });

  it('should getPrice at least 0', function (){
    var map = {};
    map[images[0].sha1] = images[0];
    imageHelper = ImageHelper.build().addMapToMap(map);
    expect(imageHelper.count()).to.eq(1);
  });

});
