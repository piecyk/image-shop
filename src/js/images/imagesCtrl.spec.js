/*global angular*/

'use strict';


describe('images:ctrl:imagesCtrl', function () {

  var imagesCtrl;
  var mediaWikiFactory;

  beforeEach(function (){
    angular.mock.module('is-images');
    angular.mock.inject(function($controller, _mediaWikiFactory_) {
      mediaWikiFactory = _mediaWikiFactory_;
      imagesCtrl = $controller('imagesCtrl');
    });
  });

  it('should exist', function() {
    expect(imagesCtrl).to.exist();
  });

  it('should queryChange to exist an be a Function', function() {
    expect(imagesCtrl.queryChange).to.exist();
    expect(imagesCtrl.queryChange).to.be.a('Function');
  });

  it('should check queryChange', function() {
    var query = 'test';
    var spy = sinon.spy(mediaWikiFactory, 'query');

    imagesCtrl.queryChange(query);
    expect(spy.calledWith(query)).to.be.true();
  });

});
