/*global angular,helpers*/

'use strict';


describe('images:directive:imageDir', function () {

  var $rootScope, $compile, element;

  beforeEach(function (){
    angular.mock.module('templates', 'common', 'images');
    angular.mock.inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_.$new();
        $compile = _$compile_;
    });
    $rootScope.list = {};
    var html = '<div list="list" type="search" images-dir></div>';
    element = helpers.compileElem($compile, $rootScope, html);
  });

  it('should check compile', function(done) {
    var $scope = element.isolateScope();

    expect(element.attr('type')).to.eql('search');
    expect(element.attr('list')).to.eql('list');
    expect($scope).to.exist();
    done();
  });

  it('should check bindToController', function(done) {
    var $scope = element.isolateScope();

    expect($scope.images).to.exist();
    done();
  });

});
