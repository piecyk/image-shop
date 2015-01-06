/*global angular*/

'use strict';


describe('images:ctrl:imagesSearchCtrl', function () {

  var imagesSearchCtrl, dispatcher;

  beforeEach(function (){
    angular.mock.module('common', 'images');
    angular.mock.inject(function($controller, _dispatcher_) {
      dispatcher = _dispatcher_;
      imagesSearchCtrl = $controller('imagesSearchCtrl');
    });
  });

  it('should exist', function() {
    expect(imagesSearchCtrl).to.exist();
  });

});
