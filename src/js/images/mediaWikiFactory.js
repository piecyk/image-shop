'use strict';

var homeModule = require('./_index');
var R = require('ramda');


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
    }).then(function(response){
      return self.images = response.data.query.allimages;
    });
  };

  return self;
}
homeModule.factory('mediaWikiFactory', mediaWikiFactory);
