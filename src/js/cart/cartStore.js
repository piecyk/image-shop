'use strict';

var aModule = require('./_index');
var ImageHelper = require('../common/ImageHelper');

/**
 * @ngInject
 */
function cartStore(dispatcher) {

  var imageHelper = ImageHelper.build({ removeFromMap: true, addIfNotInMap: true });
  var self = this;
  self.map = imageHelper.map;

  self.getPrice = imageHelper.getPrice.bind(imageHelper);
  self.count = imageHelper.count.bind(imageHelper);

  dispatcher.on('images:add', imageHelper.add.bind(imageHelper));
  dispatcher.on('images:remove', imageHelper.remove.bind(imageHelper));

  return self;
}
aModule.factory('cartStore', cartStore);
