'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function imagesSearchCtrl(imagesStore) {
  var search = this;
  search.imagesStore = imagesStore;
}
aModule.controller('imagesSearchCtrl', imagesSearchCtrl);
