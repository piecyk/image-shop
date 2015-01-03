'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function imagesCtrl($rootScope, mediaWikiFactory) {
  var images = this;

  images.list = mediaWikiFactory.images;

  images.menuCtrlQueryChange = $rootScope.$on('menuCtrl.queryChange', function(event, args) {
    mediaWikiFactory.query(args.query).then(function(imagesList) {
      images.list = imagesList;
    });
  });

  images.buy = function(image) {
    console.log(image);
  };
}
aModule.controller('imagesCtrl', imagesCtrl);
