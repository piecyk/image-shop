/*global angular*/

'use strict';


describe('menu:ctrl:menuCtrl', function () {

  var menuCtrl, dispatcher;

  beforeEach(function (){
    angular.mock.module('common', 'menu', 'images', 'cart');
    angular.mock.inject(function($controller, _dispatcher_) {
      dispatcher = _dispatcher_;
      menuCtrl = $controller('menuCtrl');
    });
  });

  it('should exist', function() {
    expect(menuCtrl).to.exist();
  });

  it('should check add dispatch', function() {
    var query = 'test';
    var spy = sinon.spy(dispatcher, 'dispatch');

    menuCtrl.queryChange(query);

    expect(spy).to.have.been.calledWith('images:queryChange', query);
  });

});
