'use strict';

var aModule = require('./_index');
var R = require('ramda');


/**
 * @ngInject
 */
function showImageCtrl(mediaWikiFactory) {
  var showImage = this;

  mediaWikiFactory.getImage(showImage.imageId).then(function(data) {
    showImage.image = R.values(data.query.pages)[0].imageinfo[0];
  });
}
aModule.controller('showImageCtrl', showImageCtrl);


/**
 * @ngInject
 */
function showImageDir() {
  return {
    restrict: 'A',
    bindToController: true,
    controller: 'showImageCtrl as showImage',
    templateUrl: 'js/images/showImageDir.tpl.html',
    scope: {
      imageId: '@'
    }
  };
}
aModule.directive('showImageDir', showImageDir);
