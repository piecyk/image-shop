'use strict';

var angular = require('angular');

module.exports = angular.module('common', []);

require('./dispatcher');
require('./localStorage');
require('./infiniteScrollDir');
