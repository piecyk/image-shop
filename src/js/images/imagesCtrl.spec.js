/*global angular*/

'use strict';


describe('images:ctrl:imagesCtrl', function () {

  var imagesCtrl;
  var mediaWikiFactory;
  var $rootScope;

  beforeEach(function (){
    angular.mock.module('images');
    angular.mock.inject(function($controller, _mediaWikiFactory_, _$rootScope_) {
      mediaWikiFactory = _mediaWikiFactory_;
      imagesCtrl = $controller('imagesCtrl');
      $rootScope = _$rootScope_;
    });
  });

  it('should exist', function() {
    expect(imagesCtrl).to.exist();
  });

  it('should queryChange to exist an be a Function', function() {
    expect(imagesCtrl.menuCtrlQueryChange).to.exist();
    expect(imagesCtrl.menuCtrlQueryChange).to.be.a('Function');
  });

  it('should check queryChange', function() {
    var query = 'test';
    var spyQuery = sinon.spy(mediaWikiFactory, 'query');

    $rootScope.$broadcast('menuCtrl.queryChange', {'query': query});
    expect(spyQuery).to.have.been.calledWith(query);
  });

});
