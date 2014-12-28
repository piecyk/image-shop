/*global angular*/

'use strict';


describe('images:directive:imageOnLoadDir', function () {

  var $rootScope;
  var $compile;

  beforeEach(function (){
    angular.mock.module('images');
    angular.mock.inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    });
  });

  function compileElem(html) {
    var element = angular.element(html);
    $compile(element)($rootScope);
    $rootScope.$digest();
    return element;
  }

  it('should check load of google logo', function(done) {
    var html = '<img ng-src="https://www.google.pl/logos/doodles/2014/holidays-2014-day-4-5729804556959744.3-vacta.jpg" image-on-load-dir/>';
    var element = compileElem(html);
    var $scope = element.scope();

    expect($scope).to.exist();
    done();
  });

});
