'use strict';

var aModule = require('./_index');
var appSettings = require('../appSettings');
var R = require('ramda');

/**
 * @ngInject
 */
function mediaWikiFactory($http, $q) {

  var self = this;

  function buildConfig(params) {
    // http://www.mediawiki.org/wiki/API:Allimages
    var config = {
      url: appSettings.WIKIPEDIA_API_URL,
      method: 'JSONP',
      params: {
        action: 'query',
        callback: 'JSON_CALLBACK',
        format: 'json',
        list: 'allimages',
        aiprop: 'url|dimensions|mime|sha1|timestamp',
        ailimit: 20,
        aifrom: '',
        continue: ''
      }
    };
    angular.extend(config.params, params);

    return config;
  }

  self.query = function(params) {
    if (!params || R.isEmpty(params.aifrom)) { return $q.when(null); }

    return $http(buildConfig(params)).then(
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
