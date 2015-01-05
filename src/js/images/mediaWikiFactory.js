'use strict';

var aModule = require('./_index');
var appSettings = require('../appSettings');
var R = require('ramda');

/**
 * @ngInject
 */
function mediaWikiFactory($http, $q) {

  var self = this;

  self.query = function(query) {

    if (R.isEmpty(query)) {
      return $q.when(null);
    }

    // http://www.mediawiki.org/wiki/API:Allimages
    var config = {
      url : appSettings.WIKIPEDIA_API_URL,
      method : 'GET',
      params: {
        action: 'query'
        , format: 'json'
        , list: 'allimages'
        , ailimit: 3
        , aiprop: 'url|dimensions|mime|sha1'
        , aifrom: query
        //, continue: var lastContinue
      }
    };

    return $http(config).then(
      function(response) {
        return response.data.query.allimages;
      },
      function(response) {
        //TODO: called asynchronously if an error occurs or server returns response with an error status.
        return response;
      });
  };

  return self;
}
aModule.factory('mediaWikiFactory', mediaWikiFactory);
