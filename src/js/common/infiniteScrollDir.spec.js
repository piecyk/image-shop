/*global angular,helpers*/

'use strict';


describe('common:directive:infiniteScrollDir', function () {

  var $rootScope, $compile, element, $document, $window;

  beforeEach(function (){
    angular.mock.module('templates', 'common');
    angular.mock.inject(function($controller, _$rootScope_, _$compile_, _$document_, _$window_) {
      $rootScope = _$rootScope_.$new();
      $compile = _$compile_;
      $document = _$document_;
      $window = _$window_;
    });
    var html = '<div when-scrolled="scroll()" infinite-scroll-dir></div>';
    element = helpers.compileElem($compile, $rootScope, html);
    //$document[0].write('<iframe id="context" width="100%" height="500px" src="about:blank"></iframe>');
    $document[0].body.innerHTML += element;
  });

  var trigger = function(ev) {
    var e = $window.document.createEvent('UIEvents');
    e.initEvent(ev, true, true);
    $window.dispatchEvent(e);
  };

  //TODO: not working ;/
  var triggerKeydown = function() {
    var e = $window.document.createEvent('KeyboardEvent');
    e.initEvent('keydown', true, true);
    e.which = 40;
    $window.dispatchEvent(e);
  };

  it('should check compile', function(done) {
    var scope = element.scope();
    expect(scope).to.exist();
    done();
  });

  it('should check when postion is wrong $apply is not called', function(done) {
    var scope = element.scope();
    sinon.stub(scope.infiniteScroll, 'getPositions').returns({
      scrollPosition: 0,
      pageHeight: 100,
      clientHeight: 0
    });
    var spy = sinon.spy(scope, '$apply');
    scope.infiniteScroll.whenScrolled();

    expect(spy).to.have.callCount(0);
    done();
  });

  it('should check getPositions is called', function(done) {
    var scope = element.scope();
    var spy = sinon.spy(scope.infiniteScroll, 'getPositions');

    scope.infiniteScroll.whenScrolled();

    expect(spy).to.have.callCount(1);
    done();
  });

  it('should trigger scroll and getPositions is called', function(done) {
    var scope = element.scope();
    var spy = sinon.spy(scope.infiniteScroll, 'getPositions');

    trigger('scroll');

    expect(spy).to.have.callCount(1);
    done();
  });

  it('should check $destroy is called', function(done) {
    var scope = element.scope();
    var spy = sinon.spy(scope, '$on');

    scope.$destroy();
    scope.$digest();

    expect(spy).to.have.callCount(0);
    done();
  });

});
