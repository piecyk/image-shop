'use strict';

var module = require('./_index');
var R = require('ramda');
var Type = require('../common/type');


/**
 * @ngInject
 */
function mediaWikiFactory($http, $q) {
  var self = this;

  self.images = null;

  // hack for CORS in gh-pages
  var CROS_PROXY_URL = 'http://www.corsproxy.com/';
  var WIKIPEDIA_URL = 'en.wikipedia.org/w/api.php';

  self.query = function(query) {
    if (R.isEmpty(query)) {
      return $q.when([]);
    }

    // http://www.mediawiki.org/wiki/API:Allimages
    return $http({
      url : CROS_PROXY_URL + WIKIPEDIA_URL,
      method : "GET",
      params: {
        action: 'query'
        , format: 'json'
        , list: 'allimages'
        , ailimit: 20
        , aiprop: 'url|dimensions|mime'
        , aifrom: query
      }
    }).then(querySuccess, queryError);
  };

  function querySuccess(response) {
    return self.images = Type.set(response.data.query.allimages, 'array');
  }

  function queryError(response) {   
    //TODO: called asynchronously if an error occurs or server returns response with an error status.
    return response;
  }

  self.____unit = function() {
    return angular.extend(self, {
      querySuccess: querySuccess,
      queryError: queryError
    });
  };

  return self;
}
module.factory('mediaWikiFactory', mediaWikiFactory);
