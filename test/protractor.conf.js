'use strict';

exports.config = {

  baseUrl: 'http://localhost:3000/',
  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY'
  },
  framework: 'mocha',
  mochaOpts:{
    reporter: 'spec',
    slow: 3000
    //, enableTimeouts: false
  },
  specs: [
    'e2e/**/*.js'
  ]

};
