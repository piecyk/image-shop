'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function imagesCtrl(mediaWikiFactory) {
  var images = this;

  images.queryChange = function(query) {
    mediaWikiFactory.query(query).then(function(imagesList) {
      images.list = imagesList;
    });
  };

  images.buy = function(image) {
    console.log(image);
  };

  images.getRandomPrice = function() {
    return Math.round(Math.random()*10) + 1;
  };
}
aModule.controller('imagesCtrl', imagesCtrl);
