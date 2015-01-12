/*global angular,helpers*/

'use strict';


describe('images:directive:imageSearchDir', function () {

  var $rootScope, $compile, element;

  beforeEach(function (){
    angular.mock.module('templates', 'common', 'images');
    angular.mock.inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_.$new();
        $compile = _$compile_;
    });
    var html = '<div images-search-dir></div>';
    element = helpers.compileElem($compile, $rootScope, html);
  });

  it('should check compile', function(done) {
    var $scope = element.isolateScope();

    expect($scope).to.exist();
    done();
  });

  it('should check bindToController', function(done) {
    var $scope = element.isolateScope();

    expect($scope.search).to.exist();
    done();
  });

});
