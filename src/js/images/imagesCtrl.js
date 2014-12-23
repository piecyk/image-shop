'use strict';

var module = require('./_index');


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
}
module.controller('imagesCtrl', imagesCtrl);
