/*global angular*/

'use strict';


describe('images:ctrl:imagesCtrl', function () {

  var imagesCtrl, dispatcher;

  beforeEach(function (){
    angular.mock.module('common', 'images');
    angular.mock.inject(function($controller, _dispatcher_) {
      dispatcher = _dispatcher_;
      imagesCtrl = $controller('imagesCtrl');
    });
  });

  it('should exist', function() {
    expect(imagesCtrl).to.exist();
  });

  it('should check that add function exist', function() {
    expect(imagesCtrl.add).to.exist();
    expect(imagesCtrl.add).to.be.a('Function');
  });

  it('should check that remove function exist', function() {
    expect(imagesCtrl.remove).to.exist();
    expect(imagesCtrl.remove).to.be.a('Function');
  });

  it('should check add dispatch', function() {
    var image = {};
    var spy = sinon.spy(dispatcher, 'dispatch');

    imagesCtrl.add(image);

    expect(spy).to.have.been.calledWith('images:add', image);
  });

  it('should check remove dispatch', function() {
    var image = {};
    var spy = sinon.spy(dispatcher, 'dispatch');

    imagesCtrl.remove(image);

    expect(spy).to.have.been.calledWith('images:remove', image);
  });

});
