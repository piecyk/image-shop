'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function menuDir() {
  return {
    restrict: 'A',
    replace: true,
    bindToController: true,
    controller: 'menuCtrl as menu',
    templateUrl: 'js/home/menuDir.tpl.html',
    scope: {}
  };
}
aModule.directive('menuDir', menuDir);


/**
 * @ngInject
 */
function menuCtrl($rootScope) {
  var menu = this;

  menu.queryChange = function(query) {
    $rootScope.$broadcast('menuCtrlQueryChange', {'query': query});
  };
}
aModule.controller('menuCtrl', menuCtrl);
