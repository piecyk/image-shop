'use strict';

var aModule = require('./_index');
var appSettings = require('../appSettings');
var R = require('ramda');

/**
 * @ngInject
 */
function mediaWikiFactory($http, $q) {

  var self = this;

  // http://www.mediawiki.org/wiki/API:Allimages
  function getDefaultConfig() {
    return {
      url: appSettings.WIKIPEDIA_API_URL,
      method: 'JSONP',
      params: {
        action: 'query',
        callback: 'JSON_CALLBACK',
        format: 'json',
        continue: ''
      }
    };
  }

  self.query = function(params) {
    if (!params || R.isEmpty(params.aifrom)) { return $q.when(null); }

    var queryParams = {
      ailimit: 20,
      list: 'allimages',
      aiprop: 'url|dimensions|mime|sha1|timestamp',
      aifrom: ''
    };
    var config = getDefaultConfig();
    angular.extend(config.params, queryParams, params);

    return self.httpHandler(config);
  };


  self.getImage = function(id) {

    var imageParams = {
      prop: 'imageinfo',
      iiprop: 'url|metadata|user',
      titles: id
    };
    var config = getDefaultConfig();
    angular.extend(config.params, imageParams);

    return self.httpHandler(config);
  };

  self.httpHandler = function(config) {
    return $http(config).then(
      function(response) {
        return response.data;
      },
      function(response) {
        return response;
      });
  };

  return self;
}
aModule.factory('mediaWikiFactory', mediaWikiFactory);
