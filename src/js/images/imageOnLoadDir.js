/**
 * @fileOverview
 * @name imageOnLoadDir.js
 * @author dpieczynski
 * @license
 */
'use strict';

var module = require('./_index');


/**
 * @ngInject
 */
function imageOnLoadDir() {
  function link(scope, element, attrs) {
    scope.time = null;
    var start = new Date();

    element.bind('load', function() {
      var end = new Date();
      scope.time = end.getTime() - start.getTime();
      //TODO: for dev to see time, later add spiner here
      console.log('image is loaded time: ', scope.time);
    });
  }

  return {
    restrict: 'A',
    link: link,
    scope: {}
  };
}
module.directive('imageOnLoadDir', imageOnLoadDir);
