'use strict';

var aModule = require('./_index');
var ImageHelper = require('../common/ImageHelper');
var R = require('ramda');

/**
 * @ngInject
 */
function imagesStore(dispatcher, mediaWikiFactory) {

  var imageHelper = ImageHelper.build();
  var self = this;
  self.map = imageHelper.map;

  self.count = imageHelper.count.bind(imageHelper);

  dispatcher.on('images:add', imageHelper.add.bind(imageHelper));
  dispatcher.on('images:remove', imageHelper.remove.bind(imageHelper));
  dispatcher.on('images:queryChange', function(query) {

    if (R.isEmpty(query)) { return; }

    mediaWikiFactory.query(query)
      .then(
        function(data) {
          imageHelper.createMap(data);
        });
  });

  self.____unit = function() {
    return R.mixin(self, {
      imageHelper: imageHelper
    });
  };

  return self;
}
aModule.factory('imagesStore', imagesStore);
