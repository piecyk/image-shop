'use strict';

var angular = require('angular');

module.exports = angular.module('images', []);

require('./imagesStore');
require('./imagesDir');
require('./imagesCtrl');
require('./mediaWikiFactory');
require('./imageOnLoadDir');
