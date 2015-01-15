'use strict';

var aModule = require('./_index');
var ImageHelper = require('../common/ImageHelper');

/**
 * @ngInject
 */
function cartStore(dispatcher, localStorage) {
  var CARTSTORE_MAP = 'CARTSTORE:MAP';

  var imageHelper = ImageHelper.build({ removeFromMap: true, addIfNotInMap: true });
  var self = this;
  self.map = imageHelper.map;

  self.getPrice = imageHelper.getPrice.bind(imageHelper);

  self.count = imageHelper.count.bind(imageHelper);

  self.clear = function() {
    imageHelper.clearMap();
    self.toStorage();
  };

  self.fromStorage = function() {
    imageHelper.addMapToMap(localStorage.get(CARTSTORE_MAP));
  };

  self.toStorage = function() {
    localStorage.set(CARTSTORE_MAP, imageHelper.map);
  };

  self.add = function(value) {
    imageHelper.add(value);
    self.toStorage();
  };

  self.remove = function(value) {
    imageHelper.remove(value);
    self.toStorage();
  };

  dispatcher.on('images:add', self.add);

  dispatcher.on('images:remove', self.remove);

  self.____unit = function() {
    return angular.extend(self, {
      imageHelper: imageHelper
    });
  };

  return self;
}
aModule.factory('cartStore', cartStore);
