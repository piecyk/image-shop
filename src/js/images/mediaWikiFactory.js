'use strict';

var aModule = require('./_index');
var R = require('ramda');
var Type = require('../common/type');
var appSettings = require('../appSettings');


/**
 * @ngInject
 */
function mediaWikiFactory($http, $q) {
  var self = this;

  self.images = [];
  self.lastContinue = '';

  self.query = function(query) {

    if (R.isEmpty(query)) {
      return $q.when(setImagesAndReturnNewArray());
    }

    // http://www.mediawiki.org/wiki/API:Allimages
    var config = {
      url : appSettings.WIKIPEDIA_API_URL,
      method : 'GET',
      params: {
        action: 'query'
        , format: 'json'
        , list: 'allimages'
        , ailimit: 20
        , aiprop: 'url|dimensions|mime|sha1'
        , aifrom: query
        //, continue: self.lastContinue
      }
    };

    return $http(config).then(querySuccess, queryError);
  };

  function setImagesAndReturnNewArray(array) {
    self.images = Type.set(array || [], 'array');
    // return array
    return self.images;
  }

  function querySuccess(response) {
    //TODO: use lastContinue add infinite scroll
    //self.lastContinue = Type.set(response.data.continue, 'object');

    return setImagesAndReturnNewArray(response.data.query.allimages);
  }

  function queryError(response) {
    //TODO: called asynchronously if an error occurs or server returns response with an error status.
    return response;
  }

  self.____unit = function() {
    return R.mixin(self, {
      querySuccess: querySuccess,
      queryError: queryError
    });
  };

  return self;
}
aModule.factory('mediaWikiFactory', mediaWikiFactory);
