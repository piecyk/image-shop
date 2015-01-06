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
  self.query = null;
  self.continue = null;

  self.load = function(query) {
    imageHelper.clearMap();
    self.callQuery({ aifrom: query });
  };

  self.loadMore = function() {
    self.callQuery(R.mixin({ aifrom: self.query }, self.continue));
  };

  self.callQuery = function(params) {
    if (!params || R.isEmpty(params.aifrom)) {
      setConfigParams(null, null);
      return;
    }

    mediaWikiFactory.query(params).then(
      function(data) {
        setConfigParams(params.aifrom, data.continue);
        imageHelper.addToMap(data.query.allimages);
      },
      function() {
        setConfigParams(null, null);
      });
  };

  function setConfigParams(query, continueObj) {
    self.query = query;
    self.continue = continueObj;
  }

  self.count = imageHelper.count.bind(imageHelper);

  dispatcher.on('images:add', imageHelper.add.bind(imageHelper));

  dispatcher.on('images:remove', imageHelper.remove.bind(imageHelper));

  dispatcher.on('images:queryChange', self.load);

  self.____unit = function() {
    return R.mixin(self, {
      imageHelper: imageHelper
    });
  };

  return self;
}
aModule.factory('imagesStore', imagesStore);
