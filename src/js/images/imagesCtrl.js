'use strict';

var aModule = require('./_index');


/**
 * @ngInject
 */
function imagesCtrl(dispatcher) {
  var images = this;

  images.add = function(image) {
    dispatcher.dispatch('images:add', image);
  };

  images.remove = function(image) {
    dispatcher.dispatch('images:remove', image);
  };

}
aModule.controller('imagesCtrl', imagesCtrl);
