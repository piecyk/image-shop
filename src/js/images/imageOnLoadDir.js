/**
 * @fileOverview
 * @name imageOnLoadDir.js
 * @author dpieczynski
 * @license
 */
'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function imageOnLoadDir() {
  function link(scope, element) {

    //var images = element.find('img');
    //console.log(images);

    element.on('click', function() {
      console.log('click');
    });

    element.bind('load', function() {
      //console.log('image is loaded');
    });
  }

  return {
    restrict: 'A',
    link: link,
    scope: {}
  };
}
aModule.directive('imageOnLoadDir', imageOnLoadDir);
