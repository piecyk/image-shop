/*global angular,helpers*/

'use strict';


describe('menu:directive:menuDir', function () {

  var $rootScope, $compile, element;

  beforeEach(function (){
    angular.mock.module('templates', 'common', 'menu', 'images', 'cart');
    angular.mock.inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_.$new();
        $compile = _$compile_;
    });
    var html = '<div menu-dir></div>';
    element = helpers.compileElem($compile, $rootScope, html);
  });

  it('should check compile', function(done) {
    var $scope = element.isolateScope();
    expect($scope).to.exist();
    done();
  });

  it('should check bindToController', function(done) {
    var $scope = element.isolateScope();

    expect($scope.menu).to.exist();
    done();
  });

  it('should check ', function(done) {
    var buttons = element.find('button');

    expect(buttons.length).to.eql(2);
    done();
  });

});
