/*global angular,helpers*/

'use strict';


describe('common:directive:scrollToDir', function () {

  var $rootScope, $compile, element, $document, $window;

  beforeEach(function (){
    angular.mock.module('templates', 'common');
    angular.mock.inject(function(_$rootScope_, _$compile_, _$document_, _$window_) {
      $rootScope = _$rootScope_.$new();
      $compile = _$compile_;
      $document = _$document_;
      $window = _$window_;
    });
    var html = '<div when-scrolled="scroll()" scroll-to-dir></div>';
    element = helpers.compileElem($compile, $rootScope, html);
  });

  it('should check compile', function(done) {
    var $scope = element.scope();

    expect($scope).to.exist();
    done();
  });

  it('should check whenScrolled is called', function(done) {
    $document[0].body.innerHTML += element;
    var $scope = element.scope();
    var spy = sinon.spy($scope, '$apply');

    $scope.whenScrolled();
    expect(spy).to.have.callCount(1);
    done();
  });

  it('should check whenScrolled', function(done) {
    $document[0].body.innerHTML += element;

    var $scope = element.scope();
    var spy = sinon.spy($scope, 'whenScrolled');

    $scope.$destroy();
    $scope.$digest();
    expect(spy).to.have.callCount(0);
    done();
  });

  it('should check whenScrolled', function(done) {
    $document[0].body.innerHTML += element;
    var $scope = element.scope();
    var spy = sinon.spy($scope, '$apply');

    $scope.whenScrolled(1, 1000);
    expect(spy).to.have.callCount(0);
    done();
  });

});
